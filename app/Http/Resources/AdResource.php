<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AdResource extends JsonResource
{
    public static $wrap = 'result';
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'expiresIn' => $this->expiresIn,
            'price' => $this->price,
            'negotiable' => $this->negotiable,
            'condition' => $this->condition,
            'usedFor' => $this->usedFor,
            'imageName' => $this->imageName,
            'mobile' => $this->mobile,
            'record' => $this->record,
            'user' => [
                'name' => $this->user->name,
                'id' => $this->user->id
            ]
        ];
//        return parent::toArray($request);


    }

    public function withResponse($request, $response)
    {
        $response->header('X-Value','apple', 'true');
    }
}
