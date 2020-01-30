<?php

namespace App\Http\Controllers;

use App\Ad;
use App\Mobile;
use App\product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('product.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $description = new product();
        $description->title = $request->input('title');
        $description->description = $request->input('description');
        $description->expiresIn = $request->input('expiresIn');
        $description->price = $request->input('price');
        $description->negotiable = $request->input('negotiable');
        $description->condition = $request->input('condition');
        $description->usedFor = $request->input('usedFor');
        $description->viewCount = 0;
        $description->saveOrFail();

        $mobile = new Mobile();
        $mobile->frontCamera= $request->input('frontCamera');
        $mobile->backCamera= $request->input('backCamera');
        $mobile->RAM= $request->input('RAM');
        $mobile->internalStorage= $request->input('internalStorage');
        $mobile->ad_id=$description->id;
        $mobile->saveOrFail();


        return redirect(route('product.show',[$mobile->id]));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Ad::find($id);
//        $mobile = $product->mobile;

        return view('product.show',[
            'product'=>$product
        ]);
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
