<?php
  
namespace App\Mail;
  
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

//use Illuminate\Http\Request;

  
class ContactEmail extends Mailable
{
    use Queueable, SerializesModels;
  
    private $sendersName;
    private $sendersEmail;
    private $sendersMessage;
  
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($emailData)
    {
        $this->sendersName =  $emailData['sendersName'];
        $this->sendersEmail =  $emailData['sendersEmail'];
        $this->sendersMessage = $emailData['sendersMessage'];

    }
  
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Website Mail')
                    ->view('emails.baseEmail')
                    ->with([
                        'sendersName' => $this->sendersName,
                        'sendersEmail' => $this->sendersEmail,
                        'sendersMessage' => $this->sendersMessage,

                ]);
    }
}