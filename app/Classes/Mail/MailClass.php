<?php

namespace App\Classes\Mail;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;

//Mailable
use App\Mail\ContactEmail;
//Model
use App\Models\ContactEmailModel;


class MailClass 
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


        //Refactor the code later properly

        try {


            $secretKey = urlencode(config('app.secretSiteKey'));
            $recaptchaResponse = urlencode($this->emailData['targetCaptcha']);

            //In manual it was written to use POST  method but it didnt work for some reason use http:GET method 
            $response = Http::get('https://www.google.com/recaptcha/api/siteverify', [
                "secret" => $secretKey,
                'response' => $recaptchaResponse,
            ]);
            $responseData = $response->json();
				 
			if ($responseData['success'] ) {
                Mail::to($this->receiverEmail)->send(new $this->mailableClass( $this->emailData));
                // Email sent successfully
                return true;
			} else {

				return false;
			}




        } catch (\Exception $e) {
            $this->setEmailError($e);
            // Failed to send email
            return false;
        }

    }

    public function storeContent() {
        try {
            ContactEmailModel::create([
                'name' => $this->emailData['sendersName'],
                'email' =>  $this->emailData['sendersEmail'],
                'message' => $this->emailData['sendersMessage'],
            ]);
       
            return true;
        } catch (\Exception $e) {
         
            return false;
        }
          

    }


      

    private function setEmailError($error) {
        $this->emailError = $error;
       
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
