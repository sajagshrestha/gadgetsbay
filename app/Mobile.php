<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mobile extends Model
{
    private $id;

    public function product()
    {
        return $this->hasOne('App\Product');
    }
}
