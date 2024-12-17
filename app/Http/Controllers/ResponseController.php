<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;


class ResponseController extends Controller
{


    public static function sendData($data)
    {
        $dataBlock =[
            'status' => true,
            'data'   => $data
        ];
        return response()->json($dataBlock);

    }


    public static function sendError($message)
    {
        $dataBlock =[
            'status' => false,
            'message'   => $message
        ];
        return response()->json($dataBlock);

    }

}