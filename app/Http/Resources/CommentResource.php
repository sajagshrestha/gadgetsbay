<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
        return [
            'id' => $this->id,
            'comment' => $this->comment,
            'ad_id' => $this->ad_id,
            'replies_count' => $this->replies_count,
            'created_at'=>$this->created_at->diffForHumans(),
            'user' => [
                'name' => $this->user->name,
                'id' => $this->user->id
            ]
        ];
    }
}
