<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mobile extends Model
{
    public function ad()
    {
        return $this->hasOne('App\Ad');
    }
    public $timestamps = false;

}
