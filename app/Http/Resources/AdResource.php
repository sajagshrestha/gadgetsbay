<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class AdResource extends JsonResource
{
    public static $wrap = 'data';
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $expired = false;
        $today = Carbon::now();
        if($today->toDateString() >$this->expires_on)
            $expired= true;

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'expiresIn' => $this->expiresIn,
            'price' => $this->price,
            'negotiable' => $this->negotiable,
            'condition' => $this->condition,
            'usedFor' => $this->usedFor,
            'imageName' => explode(" ",$this->imageName),
            'status' => $this->status,
            'location'=>$this->location,
            'views'=> $this->views,
            'created_at' => $this->created_at,
            'expired' => $expired,
            'mobile' => $this->mobile,
            'user' => [
                'name' => $this->user->name,
                'id' => $this->user->id,
                'phone' =>$this->user->phone,
                'email'=>$this->user->email
            ]
        ];



    }

    public function withResponse($request, $response)
    {
        $response->header('X-Value','apple', 'true');
    }
}
