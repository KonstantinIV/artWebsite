<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactEmailModel extends Model
{
    use HasFactory;

    protected $table = 'contact_email';

    protected $fillable = ['emailType','name', 'email', 'message'];
    public $timestamps = false;


    public static function emailRules()
    {
        return [
            'emailType' => 'required|string', // Adjust as needed
            'sendersName' => 'required|string|max:255',
            'sendersEmail' => 'required|email',
            'sendersMessage' => 'required|string',
        ];
    }

}
