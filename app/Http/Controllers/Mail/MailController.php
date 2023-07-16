<?php

namespace App\Http\Mail\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


use App\Mail\BaseEmail;

class MailController extends Controller
{
    // Existing mailables
    private static $receiverEmail = "kosta.artist@outlook.com";
    private static $mailables = [
        'contactForm' => BaseEmail::class
        // Add more mappings for other email types as needed
    ];
    
    public function sendEmail(Request $request){
        $emailType = $request->input('emailType');
        $emailData = $request->input('emailData');


        if ($this->mailableExists($emailType)) {
            $this->sendContent($this->receiverEmail, $this->mailables[$emailType], $emailData);
            return response()->json(true);

        } 
            //Email failed  to deliver
            return response()->json(false);
    }



    //Add try catch
    private function sendContent($receiverEmail, $mailableClass, $emailData) : bool
    { 
        try {
            Mail::to($receiverEmail)->send(new $mailableClass( $emailData));
            // Email sent successfully
            return true;
        } catch (\Exception $e) {
            // Failed to send email
            return false;
        }

    }


    private function mailableExists($emailType) : bool
    {
        if (array_key_exists($emailType, $this->mailables)) {
            return true;
        }
        return false;

    }


}
