<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Controllers\ResponseController;
use App\Classes\Mail\MailClass;
use App\Classes\Captcha\CaptchaClass;

class MailController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request 
     */
    public function store(Request $request)
    {
        $receiverEmail = "kosta.artist@outlook.com";

        $mailableType = $request->input('emailType');
        $emailData = $request->input('emailData');
        $captchaValue = $emailData['sendersCaptcha'];

        $mail = new MailClass( $emailData);
        //app.sitekey cant be accesed from env file must define serately in app config file

        $captcha = new CaptchaClass(config('app.secretSiteKey'));

        //Captcha by google to stop bots sendng email
        if (!$captcha->verifyCaptcha($captchaValue)) {
            return ResponseController::sendError("Captcha error");
        }
        //Check if the mailable exists if not send false, each mailable has its own style or structure for sending email
        if (!$mail->mailableExists($mailableType)) {
            return ResponseController::sendError("Wrong email type");
        }
        //Set mailable class
        $mail->setMailable($mailableType);
        //if mail was not sent for some reason
        if (!$mail->sendContent($receiverEmail)) {
            return ResponseController::sendError("Email was not sent");
        }

        //add chanegs in the futture
        //STORE DATA INTO DATABASE
        //Add proper try catch and error
        $mail->storeContent();

        return ResponseController::sendData("Mail sent!");

    }

  

}