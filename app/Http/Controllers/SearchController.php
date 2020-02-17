<?php

namespace App\Http\Controllers;
use App\Ad;
use App\Http\Resources\AdResource;
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
    	$products = Ad::take(10)->get()->sortBy('views');
    	return AdResource::collection($products);
    }
}
