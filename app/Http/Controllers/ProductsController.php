<?php

namespace App\Http\Controllers;

use App\Ad;
use App\Http\Resources\AdResource;
use App\Mobile;
use Illuminate\Http\Request;
use App\Http\Requests\MobileRequest;
use App\Http\Requests\EditAdMobile;

class ProductsController extends ResponseController
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['show', 'index', 'search']]);
    }

    public function index()
    {
        //get all ads
        $products = Ad::paginate(10);
        return AdResource::collection($products);
//
    }

    public function store(Request $request)
    {

        dd($this->getImageNames($request));
        return response()->json(['imageNames',$images]);
        $inputs = $request->all();
        $description = new Ad();
        $description->setValue($inputs);
        $description->productType = 'mobile';
        $description->user_id = auth()->user()->id;
        $description->imageName = $this->getImageNames($request);
        $description->saveOrFail();

        $mobile = new Mobile();
        $mobile->setValue($inputs);
        $mobile->ad_id = $description->id;
        $mobile->saveOrFail();

        $description->product_id = $mobile->id;
        $description->saveOrFail();
        return (new AdResource($description))
            ->response()
            ->setStatusCode(201);
    }


    public function show($id)
    {
        $product = Ad::findOrFail($id);
        return new AdResource($product);
    }

    public function update(MobileRequest $request, $id)
    {
        $description = Ad::find($id);
        $mobile = $description->mobile;

        $description->setValue($request->all());
        $description->saveOrFail();

        $mobile->setValue($request->all());
        $mobile->saveOrFail();


        return new AdResource($description);
    }


    public function destroy($id)
    {
        $product = Ad::findOrFail($id);
        if ($product->delete()) {
            return new AdResource($product);
        }
    }

    public function myProduct()
    {
        $user = auth()->user();
//        $user->ad();
        return AdResource::collection($user->ad);
    }

    public function getImageNames(Request $request)
    {
        $images = $request->file('imageName');
        $imageNameArray =["randi" , "bhalu"];
        if(!empty($images))
        {
           foreach ($images as $image)
           {
               $Ext = $image->getClientOriginalExtension();
               $fileNameToStore = auth()->id().'_'.time().'.'.$Ext;
               array_push($imageNameArray,$fileNameToStore);
               $request->file('imageName')->storeAs('public/images',$fileNameToStore);
           }
        }
        return implode(" ",$imageNameArray);
    }



}
