<?php

namespace App\Classes\Captcha;

use Illuminate\Support\Facades\Http;


class CaptchaClass
{

    private $secretKey;
    private $captchaResponse;
    function __construct($secretKey, $captchaResponse)
    {
        $this->secretKey = $secretKey;
        $this->captchaResponse = $captchaResponse;
    }


    public function verifyCaptcha(): bool
    {
        try {
            $secretKey = urlencode($this->secretKey);
            $recaptchaResponse = urlencode($this->captchaResponse);

            //In manual it was written to use POST  method but it didnt work for some reason so use http:GET method 
            $response = Http::get('https://www.google.com/recaptcha/api/siteverify', [
                "secret" => $secretKey,
                'response' => $recaptchaResponse,
            ]);

            $responseData = $response->json();

            if (!$responseData['success']) {
                return false;
            }
            return true;

        } catch (\Exception $e) {
            
            return false;
        }

    }



}