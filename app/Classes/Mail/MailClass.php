<?php

namespace App\Classes\Mail;

use Illuminate\Support\Facades\Mail;

//Mailable
use App\Mail\ContactEmail;
//Model
use App\Models\ContactEmailModel;


class MailClass
{

    // Existing mailables
    public static $mailables = [
        'contactForm' => ContactEmail::class
        // Add more mappings for other email types as needed
    ];

    private $mailable;


   

    public static function sendContent($mailableType, $receiverEmail, $emailData): bool
    {
        try {
            $mailableClass = new self::$mailables[$mailableType]($emailData);
            Mail::to($receiverEmail)->send($mailableClass);
            return true;
        } catch (\Exception $e) {

            // Failed to send email
            return false;
        }

    }
    public static function mailableExists($mailableType): bool
    {
        if (array_key_exists($mailableType, self::$mailables)) {
            return true;
        }

        return false;

    }







}