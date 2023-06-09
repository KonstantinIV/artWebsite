<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{

    private $sendersName;
    private $sendersEmail;
    private $sendersMessage;



    public function sendEmail(Request $request)
    {

        $this->setSendersName( $request->input('sendersName'));
        $this->setSendersEmail( $request->input('sendersEmail'));
        $this->setSendersMessage( $request->input('sendersMessage'));
        

        $data = [
            'to'  => 'kosta.artist@outlook.com',
            'subject' =>$this->getSendersName(),
            'message' => $this->getSendersMessage(),
        ];

        Mail::send([], [], function ($message) use ($data) {
            $message->to($data['to'])
                ->subject($data['subject'])
                ->setBody($data['message']);
        });

        return response()->json("Email sent");
    }



    
    private function setSendersName($sendersName){
        $this->sendersName = $sendersName;

    }
    private function setSendersEmail($sendersEmail){
        $this->sendersEmail = $sendersEmail;

    }

    private function setSendersMessage($sendersMessage){
        
        // Append extra message content
        $sendersMessage .= "\n\n" . $this->getSendersName();

        $sendersMessage .= "\n\n" . $this->getSendersEmail();

        $this->sendersMessage = $sendersMessage;


    }



    private function getSendersName(){
        return $this->sendersName;
    }
    private function getSendersEmail(){
        return $this->sendersEmail;
    }
    private function getSendersMessage(){
        return $this->sendersMessage;
    }

}
