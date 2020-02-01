<?php

namespace App\Http\Controllers;

use App\Ad;
use App\Http\Resources\AdResource;
use App\Mobile;
use App\product;
use App\Record;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    //
//    public function __construct()
//    {
//        $this->middleware('auth', ['except' => ['show', 'index']]);
//    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all ads
        $products = Ad::paginate(10);
        return AdResource::collection($products);
//        return view('product.index',[
//            'products'=>$products
//        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
//    public function create()
//    {
//        return view('product.create');
//    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $description = new Ad();
        $mobile = new Mobile();

        $description->title = $request->input('title');
        $description->description = $request->input('description');
        $description->expiresIn = $request->input('expiresIn');
        $description->price = $request->input('price');
        $description->negotiable = $request->input('negotiable');
        $description->condition = $request->input('condition');
        $description->usedFor = $request->input('usedFor');
        $description->productType = 'mobile';
        $description->saveOrFail();


        $mobile->frontCamera = $request->input('frontCamera');
        $mobile->backCamera = $request->input('backCamera');
        $mobile->RAM = $request->input('RAM');
        $mobile->internalStorage = $request->input('internalStorage');
        $mobile->ad_id = $description->id;
        $mobile->saveOrFail();

        $description->product_id = $mobile->id;
        $description->saveOrFail();

        $record = new Record();
        $record->ad_id = $description->id;
        $record->viewCount = 0;
        $record->save();

        return new AdResource($description);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Ad::findOrFail($id);
        return new AdResource($product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
//    public function edit($id)
//    {
//        $description = Ad::find($id);
//        return view('product.edit',[
//           'description'=>$description
//        ]);
//    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Ad::findOrFail($id);
        if($product->delete())
        {
            return new AdResource($product);
        }
    }

//    private function validate()
//    {
//
//    }
}
