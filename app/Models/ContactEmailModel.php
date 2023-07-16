<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactEmailModel extends Model
{
    use HasFactory;

    protected $table = 'contact_email';

    protected $fillable = ['name', 'email', 'message'];
    public $timestamps = false;

}
