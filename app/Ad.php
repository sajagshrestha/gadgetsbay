<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    public function mobile()
    {
        return $this->hasOne('App\Mobile');
    }

    public function record()
    {
        return $this->hasOne('App\Record');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
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

        if(isset($inputs['expiresIn'])) {

            $this->expiresIn = $inputs['expiresIn'];
        }

    }



}
