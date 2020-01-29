<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    public function mobile()
    {
        return $this->hasOne('App\Mobile');
    }
}
