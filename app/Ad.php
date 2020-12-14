<?php

namespace App;

use Carbon\Carbon;
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

     function setValue(array $inputs,bool $edit)
    {


        $this->title = $inputs['title'];
        $this->description = $inputs['description'];
        $this->price = $inputs['price'];
        $this->negotiable = $inputs['negotiable'];
        $this->condition = $inputs['condition'];
        $this->usedFor = $inputs['usedFor'];
        $this->location = $inputs['location'];
        $this->expiresIn = $inputs['expiresIn'];
        if(!$edit) {
            $date = Carbon::now();
            $date = $date->addDays($inputs['expiresIn']);
            $this->expires_on = $date;
        }

    }


}
