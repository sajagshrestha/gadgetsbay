<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    public function mobile()
    {
        return $this->hasOne('App\Mobile');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    protected $guarded = [];

     function setValue(array $inputs)
    {
        $this->title = $inputs['title'];
        $this->description = $inputs['description'];
        $this->price = $inputs['price'];
        $this->negotiable = $inputs['negotiable'];
        $this->condition = $inputs['condition'];
        $this->usedFor = $inputs['usedFor'];
        $this->location = $inputs['location'];

        if(isset($inputs['expiresIn'])) {

            $this->expiresIn = $inputs['expiresIn'];
        }

    }



}
