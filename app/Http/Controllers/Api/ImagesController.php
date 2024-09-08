<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Http\Controllers\ResponseController;
use App\Classes\Images\ImageFileNameClass;
use App\Http\Controllers\Controller;


class ImagesController extends Controller
{
    private const CACHE_KEY = 'imageFileNameData';
    private $imagesClass;



    function __construct()
    {
        $this->imagesClass = new ImageFileNameClass();

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $imageData = [];

        if (Cache::has(self::CACHE_KEY)) {
            $imageData = Cache::get(self::CACHE_KEY);

        } else {
            if ($this->imagesClass->publicPathExists('img/gallery')) {
                $imageData = $this->imagesClass->getImageFileNames('img/gallery');
                //keyname, data, expirationdatea
                Cache::put(self::CACHE_KEY, $imageData, Carbon::now()->addMonth());
            } else {
                return ResponseController::sendError("Directory does not exist");

            }


        }

        return ResponseController::sendData($imageData);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}