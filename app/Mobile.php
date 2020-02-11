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
    protected $guarded = [];

     function setValue(array $inputs)
    {
        $this->frontCamera = $inputs['frontCamera'];
        $this->backCamera = $inputs['backCamera'];
        $this->RAM = $inputs['RAM'];
        $this->internalStorage = $inputs['internalStorage'];


    }

}
