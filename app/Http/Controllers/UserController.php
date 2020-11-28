<?php

namespace App\Http\Controllers;

use App\Notification;
use App\User;
use App\UserFromBearerToken;
use Illuminate\Http\Request;

class UserController extends ResponseController
{
    public function userStats(Request $request){

        if($request->bearerToken())
        {
            $userFromToken = new UserFromBearerToken();
            $user = $userFromToken->getUser($request);
            if(isset($user->id))
            {
                return response()->json([
                    'totalAds' => $user->ad->count(),
                    'views' => $this->totalViews($user->ad),
                    'sold' => $this->totalSold($user->ad)

                ], 200);
            }
            else
                return $this->responseUnprocessable([
                    'error'=>'user not found']);
        }
        else{
            return $this->responseUnauthorized();
        }
    }

    public function notification(Request $request)
    {
        if($request->bearerToken())
        {
            $userFromToken = new UserFromBearerToken();
            $user = $userFromToken->getUser($request);
            if(isset($user->id))
            {
                $notifications = Notification::where('user_id',$user->id)->orderBy('created_at','desc')->limit(10)->get();
                return $this->responseSuccess('success',$notifications);
            }
            else
                return $this->responseUnprocessable([
                    'error'=>'user not found']);
        }
        else{
            return $this->responseUnauthorized();
        }
    }

    private function totalViews($ads)
    {
        $views = 0;
        foreach ($ads as $ad)
            $views = $views + $ad->views;

        return $views;
    }

    private function totalSold($ads)
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
