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
    public $timestamps = false;
}
