<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Classes\Mail\MailClass;


class MailController extends Controller
{
    


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $mailableType = $request->input('emailType');
        $emailData = $request->input('emailData');

        $mail = new MailClass($mailableType, $emailData);

        //Check if the mailable exists if not send false
        if ($mail->mailableExists()) {

            if ($mail->sendContent()){

                //STORE DATA INTO DATABASE
                $mail->storeContent();
                
                return response()->json(true);


            }
        } 
        //return response()->json($mail->getEmailError());

        return response()->json(false);

        //
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
