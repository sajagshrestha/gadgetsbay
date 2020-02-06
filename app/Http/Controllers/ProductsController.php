<?php

namespace App\Http\Controllers;

use App\Ad;
use App\Http\Resources\AdResource;
use App\Mobile;
use App\product;
use App\Record;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMobile;
use App\Http\Requests\EditAdMobile;

class ProductsController extends Controller
{
    //
//    public function __construct()
//    {
//        $this->middleware('auth', ['except' => ['show', 'index']]);
//    }

    public function index()
    {
        //get all ads
        $products = Ad::paginate(10);
        return AdResource::collection($products);
//
    }

  /*  public function create()
    {
        return view('product.create');
    }*/


    public function store(Request $request)
    {

        $description = new Ad();
        $mobile = new Mobile();

        $description->title = $request->input('title');
        $description->description = $request->input('description');

        $description->price = $request->input('price');
//        return $description;
//        $description->expiresIn = $request->input('expiresIn');
//        $description->negotiable = $request->input('negotiable');
//        $description->condition = $request->input('condition');
//        $description->usedFor = $request->input('usedFor');
//
        $description->expiresIn = 2;
        $description->negotiable =1;
        $description->condition = 1;
        $description->usedFor = 1;
        $description->productType = 'mobile';
//        $description->user_id = auth()->user()->id;
        $description->user_id = 1;

        if($request->hasFile('imageName'))
        {
            $Ext = $request->file('imageName')->getClientOriginalExtension();

//            $fileNameToStore = auth()->user()->id.'_'.time().$Ext;
            $fileNameToStore = '1'.'_'.time().$Ext;


            $path = $request->file('imageName')->storeAs('public/images',$fileNameToStore);
        }
        else{
            $fileNameToStore = null;
        }
        $description->imageName = $fileNameToStore;

        $description->saveOrFail();


//        $mobile->frontCamera = $request->input('frontCamera');
//        $mobile->backCamera = $request->input('backCamera');
//        $mobile->RAM = $request->input('RAM');
//        $mobile->internalStorage = $request->input('internalStorage');

        $mobile->frontCamera = 1;
        $mobile->backCamera = 1;
        $mobile->RAM = 1;
        $mobile->internalStorage =1;
        $mobile->ad_id = $description->id;
        $mobile->saveOrFail();

        $description->product_id = $mobile->id;
        $description->saveOrFail();

        $record = new Record();
        $record->ad_id = $description->id;
        $record->viewCount = 0;
        $record->save();

        return (new AdResource($description))
            ->response()
            ->setStatusCode(201);
    }


    public function show($id)
    {
        $product = Ad::findOrFail($id);
        return new AdResource($product);
    }


    public function update(EditAdMobile $request, $id)
    {
        $description = Ad::find($id);
        $mobile = $description->mobile;

        $description->title = $request->input('title');
        $description->description = $request->input('description');
        $description->price = $request->input('price');
        $description->negotiable = $request->input('negotiable');
        $description->condition = $request->input('condition');
        $description->usedFor = $request->input('usedFor');
        $description->saveOrFail();


        $mobile->frontCamera = $request->input('frontCamera');
        $mobile->backCamera = $request->input('backCamera');
        $mobile->RAM = $request->input('RAM');
        $mobile->internalStorage = $request->input('internalStorage');
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


}
