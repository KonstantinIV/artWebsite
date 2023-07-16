<?php

namespace App\Http\Controllers\Mail;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;


use App\Mail\ContactEmail;
use App\Models\ContactEmailModel;


class MailController extends Controller
{   
    private  $receiverEmail = "kosta.artist@outlook.com";

        // Existing mailables
    private  $mailables = [
        'contactForm' => ContactEmail::class
        // Add more mappings for other email types as needed
    ];

    private $emailType ; 
    private $emailData ; 

    private $mailableClass;

    public $emailError;


    function __construct($emailType,$emailData){
        $this->emailType = $emailType;
        $this->emailData = $emailData;

    }
   

    public function sendContent( ) : bool
    { 
        try {
            Mail::to($this->receiverEmail)->send(new $this->mailableClass( $this->emailData));
            // Email sent successfully
            return true;
        } catch (\Exception $e) {
            // Failed to send email
            return false;
        }

    }

    public function storeContent() {
       
            ContactEmailModel::create([
                'name' => $this->emailData['sendersName'],
                'email' =>  $this->emailData['sendersEmail'],
                'message' => $this->emailData['sendersMessage'],
            ]);
       

    }

    public function getEmailError() {
       
       return $this->emailError;
    }



    //Set Mailable class
    public function mailableExists() : bool
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
