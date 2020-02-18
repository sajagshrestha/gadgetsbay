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
    	$products = Ad::take(10)->get()->sortBy('views');
    	return AdResource::collection($products);
    }

    public function latest()
    {
        $products = Ad::take(10)->latest()->get();
        return AdResource::collection($products);
    }

    public function filter(Request $request, Ad $ad)
    {
        $ad = AdSearch::apply($request);

//        $ad = $ad->newQuery();
//        //name
//        if($request->has('name'))
//        {
//            $name = $request->input('name');
//            $ad->where(function ($query) use($name) {
//                $query->where('title','LIKE', "%$name%")
//                    ->orWhere('description','LIKE', "%$name%");
//            });
//        }
//        //price less than
//        if($request->has('price_less_than'))
//        {
//            $ad->where('price','<',$request->input('price_less_than'));
//        }
//        //price more than
//        if($request->has('price_greater_than'))
//        {
//            $ad->where('price','>',$request->input('price_greater_than'));
//        }
//        //negotiable
//        if($request->has('negotiable'))
//        {
//            $ad->where('negotiable',$request->input('negotiable'));
//        }
        //RAM

        //internal Storage
        //condition
        return AdResource::collection($ad);
    }
}
