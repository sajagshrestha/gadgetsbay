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

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['show', 'index']]);
    }

    public function index()
    {
        //get all ads
        $products = Ad::paginate(10);
        return AdResource::collection($products);
//
    }

    public function store(StoreMobile $request)
    {
        $inputs = $request->all();

        $description = new Ad();
        $description->setValue($inputs);
        $description->productType = 'mobile';
        $description->user_id = auth()->user()->id;
        if($request->hasFile('imageName'))
        {
            $Ext = $request->file('imageName')->getClientOriginalExtension();
            $fileNameToStore = '1'.'_'.time().'.'.$Ext;
            $request->file('imageName')->storeAs('public/images',$fileNameToStore);
        }
        else{
            $fileNameToStore = null;
        }
        $description->imageName = $fileNameToStore;
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

    public function update(EditAdMobile $request, $id)
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

    public function search(Request $request)
    {
        $searchTerm = $request->input['search'];
        $products = Ad::query()
        ->where('title','LIKE', "%$searchTerm%")
        ->get();
 
        return AdResource::collection($products);
    }


}
