<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Carbon\Carbon;


use App\Classes\Images\ImageFileNameClass;
use App\Http\Controllers\Controller;


class ImagesController extends Controller
{
    private const CACHE_KEY = 'imageFileNameData';
    private $imagesClass;
    


    function __construct()
    {
        $this->imagesClass = new ImageFileNameClass('img/gallery');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $imageData = [];
        $data = [];

        if (Cache::has(self::CACHE_KEY)) {
            $imageData = Cache::get(self::CACHE_KEY);
         
        } else {
            if($this->imagesClass->publicPathExists()){
                $imageData = $this->imagesClass->getImageFileNames();;
                //Set cache with new data : 
                //keyname, data, expirationdate
                Cache::put(self::CACHE_KEY, $imageData, Carbon::now()->addMonth());
            }else{
                $data =[
                    'status' => false,
                    'messsage'   => 'Directory does not exist'
                ];
                return response()->json($data);
            }

         
        }
        $data =[
            'status' => true,
            'data'   => $imageData
        ];
        return response()->json($data);
       

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