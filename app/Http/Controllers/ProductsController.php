<?php

namespace App\Http\Controllers;

use App\Ad;
use App\Http\Resources\AdResource;
use App\Mobile;
use App\product;
use App\Record;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMobile;

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

    public function create()
    {
        return view('product.create');
    }


    public function store(StoreMobile $request)
    {
        $validatedData = $request->validated();
        
        $description = new Ad();
        $mobile = new Mobile();
        $description->title = $validatedData['title'];
        $description->productType = 'mobile';
        return $description;
        $description->saveOrFail();
//
//
//        $mobile->frontCamera = $request->input('frontCamera');
//        $mobile->backCamera = $request->input('backCamera');
//        $mobile->RAM = $request->input('RAM');
//        $mobile->internalStorage = $request->input('internalStorage');
//        $mobile->ad_id = $description->id;
//        $mobile->saveOrFail();
//
//        $description->product_id = $mobile->id;
//        $description->saveOrFail();
//
//        $record = new Record();
//        $record->ad_id = $description->id;
//        $record->viewCount = 0;
//        $record->save();


        return (array)$description;

//        return new AdResource($description);
    }


    public function show($id)
    {

        $product = Ad::findOrFail($id);
        return new AdResource($product);
    }


    public function update(Request $request, $id)
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
