<?php

namespace App\Http\Controllers;
use App\Ad;
use App\Http\Resources\AdResource;
use App\SearchFilter\AdSearch;
use Illuminate\Http\Request;
use Carbon\Carbon;


class SearchController extends Controller
{
    private $today;
    public function __construct()
    {
        $this->today = Carbon::now();


    }
    public function search(Request $request)
    {
        $searchTerm = $request->input('search');
        $products = Ad::query()
        ->where('title','LIKE', "%$searchTerm%")
        ->orWhere('description','LIKE', "%$searchTerm%" )
        ->get();

        return AdResource::collection($products);
    }

    public function mostViewed()
    {
    	$products = Ad::where('expires_on','>=',$this->today->toDateString())->where('status',1)->orderBy('views', 'desc')->take(8)->get();
    	return AdResource::collection($products);
    }

    public function latest()
    {
        $products = Ad::where('expires_on','>=',$this->today->toDateString())->where('status',1)->latest()->take(8)->get();
        return AdResource::collection($products);
    }

    public function filter(Request $request)
    {
        $ad = new Ad();
        $ad = AdSearch::apply($request);
        return AdResource::collection($ad);
    }
}
