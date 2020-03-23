<?php

namespace App\Http\Controllers;
use App\Ad;
use App\Http\Resources\AdResource;
use App\SearchFilter\AdSearch;
use Illuminate\Http\Request;

class SearchController extends Controller
{
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
    	$products = Ad::orderBy('views', 'desc')->take(10)->get();
    	return AdResource::collection($products);
    }

    public function latest()
    {
        $products = Ad::latest()->take(10)->get();
        return AdResource::collection($products);
    }

    public function filter(Request $request, Ad $ad)
    {
        $ad = AdSearch::apply($request);
        return AdResource::collection($ad);
    }
}
