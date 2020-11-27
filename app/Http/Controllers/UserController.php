<?php

namespace App\Http\Controllers;

use App\User;
use App\UserFromBearerToken;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function userStats(Request $request){

        if($request->bearerToken())
        {
            $userFromToken = new UserFromBearerToken();
            $user_id = $userFromToken->getUserId($request->bearerToken());
            $user = User::find($user_id);
            return response()->json([
                'totalAds' => $user->ad->count(),
                'views' => $this->totalViews($user->ad),
                'sold' => $this->totalSold($user->ad)

            ], 200);

        }
    }

    public function totalViews($ads)
    {
        $views = 0;
        foreach ($ads as $ad)
            $views = $views + $ad->views;

        return $views;
    }

    public function totalSold($ads)
    {
        $sold = 0;
        foreach ($ads as $ad)
        {
            if($ad->sold == 2)
                $sold++;
        }

        return $sold;
    }
}
