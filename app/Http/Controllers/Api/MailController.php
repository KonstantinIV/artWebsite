<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Controllers\ResponseController;
use App\Classes\Captcha\CaptchaClass;
use App\Classes\Mail\MailClass;

use App\Models\ContactEmailModel;


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

        $emailData = $request->input('emailData');
        $mailableType = $request->input('emailData.emailType');
        $captchaValue = $request->input('captcha');

        //Validate data
        $rules = ContactEmailModel::emailRules(); 
               
        //fix validator
        // $request->validate($rules);

        //Captcha by google to stop bots sendng email
        if (!CaptchaClass::verifyCaptcha($captchaValue, config('app.secretSiteKey'))) {
            return ResponseController::sendError("Captcha error");
        }
        //Check if the mailable exists, mailables have own html structure to them
        if (!MailClass::mailableExists($mailableType)) {
            return ResponseController::sendError("Wrong email type");
        } 
        //if mail was not sent for some reason
        if (!MailClass::sendContent($mailableType,$receiverEmail,$emailData)) {
            return ResponseController::sendError("Email was not sent");
        }

        //STORE DATA INTO DATABASE
        try{
            ContactEmailModel::create([
                'emailType' => $emailData['emailType'],
                'name' => $emailData['sendersName'],
                'email' => $emailData['sendersEmail'],
                'message' => $emailData['sendersMessage'],
            ]);
        } catch(e){

        }
            

     
        return ResponseController::sendData("Mail sent!");

    }

  

}