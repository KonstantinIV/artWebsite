<?php

namespace App\Classes\Mail;

use Illuminate\Support\Facades\Mail;

//Mailable
use App\Mail\ContactEmail;
//Model
use App\Models\ContactEmailModel;


class MailClass
{

    // Existing mailables
    private $mailables = [
        'contactForm' => ContactEmail::class
        // Add more mappings for other email types as needed
    ];

    private $emailType;
    private $emailData;
    private $receiverEmail;

    private $mailableClass;
    public $emailError;


    function __construct($emailType, $emailData, $receiverEmail)
    {
        $this->emailType = $emailType;
        $this->emailData = $emailData;
        $this->receiverEmail = $receiverEmail;
    }


    public function sendContent(): bool
    {

        try {

            Mail::to($this->receiverEmail)->send(new $this->mailableClass($this->emailData));
            return true;
        } catch (\Exception $e) {
            $this->setEmailError($e);
            // Failed to send email
            return false;
        }

    }

    public function storeContent()
    {
        try {
            ContactEmailModel::create([
                'name' => $this->emailData['sendersName'],
                'email' => $this->emailData['sendersEmail'],
                'message' => $this->emailData['sendersMessage'],
            ]);

            return true;
        } catch (\Exception $e) {

            return false;
        }


    }


    private function setEmailError($error)
    {
        $this->emailError = $error;

    }

    public function getEmailError()
    {
        return $this->emailError;
    }



    //Set Mailable class
    public function mailableExists(): bool
    {
        if (array_key_exists($this->emailType, $this->mailables)) {
            $this->setMailableClass($this->emailType);
            return true;
        }

        return false;

    }


    private function setMailableClass($emailType)
    {
        $this->mailableClass = $this->mailables[$emailType];

    }


}