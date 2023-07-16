<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Mail\MailController;


//This class is meant to interact MailController object, logic is put here to keep Mailcontrller clean
//client sends emailType and data -> router-> MailLogicController -> MailController -> Mailable


class MailLogicController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)  

    {
        
        $emailType = $request->input('emailType');
        $emailData = $request->input('emailData');

        $mailController = new MailController($emailType, $emailData);

        
        if ($mailController->mailableExists()) {

            if ($mailController->sendContent()){
                return response()->json(true);
            }
            return response()->json(false);
        } 
        return response()->json(false);




        //
    }
}
