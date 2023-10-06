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

        $mail = new MailClass($mailableType, $emailData, $receiverEmail);
        //app.sitekey cant be accesed from env file must define serately in app config file
        $captcha = new CaptchaClass(config('app.secretSiteKey'), $emailData['sendersCaptcha']);

        //Check if the mailable exists if not send false, each mailable has its own style or structure for sending email
        if (!$mail->mailableExists()) {
            return ResponseController::sendError("Wrong email type");
        }
        //Captcha by google to stop bots sendng email
        if (!$captcha->verifyCaptcha()) {
            return ResponseController::sendError("Captcha error");
        }
        //if mail was not sent for some reason
        if (!$mail->sendContent()) {
            return ResponseController::sendError("Email was not sent");
        }

        //add chanegs in the futture
        //STORE DATA INTO DATABASE
        //Add proper try catch and error
        $mail->storeContent();

        return ResponseController::sendData("Mail sent!");

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }



}