<?php

namespace App\Http\Controllers;

use App\Ad;
use App\Http\Resources\AdResource;
use App\Mobile;
use Illuminate\Http\Request;
use App\Http\Requests\MobileRequest;
use Illuminate\Support\Facades\Storage;


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

    public function store(MobileRequest $request)
    {
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

    public function update(Request $request, $id)
    {
    	return response()->json(['data'=>$request->all()]);
        $description = Ad::find($id);
        $mobile = $description->mobile;

        $images = explode(" ",$description->imageName);
        foreach ($images as $image)
        {
            Storage::delete('public/images/'.$image);
        }
        $description->setValue($request->all());
        $description->imageName = $this->getImageNames($request);
        $description->saveOrFail();

        $mobile->setValue($request->all());
        $mobile->saveOrFail();

        return new AdResource($description);
    }


    public function destroy($id)
    {
        $product = Ad::findOrFail($id);
        $images = explode(" ",$product->imageName);
        if ($product->delete()) {
        foreach ($images as $image)
        {
            Storage::delete('public/images/'.$image);
        }
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
        $imageNameArray =[];
        if(!empty($images))
        {
           foreach ($images as $index=>$image)
           {
               $Ext = $image->getClientOriginalExtension();
               $fileNameToStore = auth()->id().'_'.time().'_'.$index.'.'.$Ext;
               array_push($imageNameArray,$fileNameToStore);
               $image->storeAs('public/images',$fileNameToStore);
           }
        }
        return implode(" ",$imageNameArray);

    }

    public function getImages($imageName)
    {
    	return response()->file('public/images'.$imageName);
    }

}
