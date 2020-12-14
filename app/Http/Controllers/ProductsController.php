<?php

namespace App\Http\Controllers;

use App\Ad;
use App\UserFromBearerToken;
use App\Http\Resources\AdResource;
use App\Mobile;
use Illuminate\Http\Request;
use App\Http\Requests\MobileRequest;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;



class ProductsController extends ResponseController
{

    /**
     * @var UserFromBearerToken
     */
    private $userFromToken;
    private $today; 

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['show', 'index', 'search','markSold']]);
        $this->userFromToken = new UserFromBearerToken();
        $this->today = Carbon::now();

    }

    public function index()
    {
        //get all ads
        
        $products = Ad::paginate(10);
        return AdResource::collection($products);
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


    public function show($id, Request $request)
    {

        if($product = Ad::find($id))
        {
            if($request->bearerToken())
            {
                $userFromToken = new UserFromBearerToken();
                $user = $userFromToken->getUser($request);
                if(!isset($user->id)) {
                    return $this->responseUnprocessable([
                        'error' => 'user not found'
                    ]);
                }
                if($user->id != $product->id)
                    $product->views++;
            }
            else
                $product->views++;
            $product->save();
            return new AdResource($product);
        }
        else{
            return $this->responseUnprocessable([
                'error' => 'product not found'
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $description = Ad::find($id);
        $mobile = $description->mobile;
        $images = explode(" ",$description->imageName);

        $description->setValue($request->all());
        $description->imageName = $this->getImageNames($request);
        $mobile->setValue($request->all());
        if($mobile->saveOrFail() && $description->saveOrFail())
        {
            foreach ($images as $image)
            {
                Storage::delete('public/images/'.$image);
            }
        }

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
    {where('expires_on','>=',$this->today)->
        $user = auth()->user();
        return AdResource::collection($user->ad->sortByDesc('created_at'));
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

    public function markSold($id, Request $request)
    {
        if($product = Ad::find($id))
        {
            if($request->bearerToken())
            {
                $userFromToken = new UserFromBearerToken();
                $user = $userFromToken->getUser($request);
                if(!isset($user->id)) {
                    return $this->responseUnprocessable([
                        'error' => 'user not found'
                    ]);
                }
                if($user->id != $product->user_id)
                {
                    return $this->responseUnprocessable([
                        'error' => 'You are not authorized to change status of this product'
                    ]);
                }
                $product->status = $request->status;
                $product->save();
                return new AdResource($product);
            }
            else
                return $this->responseUnprocessable([
                    'error' => 'Please login to view your products'
                ]);

        }
        else{
            return $this->responseUnprocessable([
                'error' => 'product not found'
            ]);
        }
    }






}
