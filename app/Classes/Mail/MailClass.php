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

    private $emailData;
    private $mailable;
    public $emailError;


    function __construct($emailData)
    {
        $this->emailData = $emailData;

    }


    public function sendContent($receiverEmail): bool
    {
        try {
            $mailableClass = new $this->mailable($this->emailData);
            Mail::to($receiverEmail)->send($mailableClass);
            return true;
        } catch (\Exception $e) {

            // Failed to send email
            return false;
        }

    }


    public function storeContent(): bool
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



    public function mailableExists($mailableType): bool
    {
        if (array_key_exists($mailableType, $this->mailables)) {
            return true;
        }

        return false;

    }


    public function setMailable($mailableType): void
    {
        $this->mailable = $this->mailables[$mailableType];

    }





}