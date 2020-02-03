<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    public $id;
    public $title;
    public $description;
    public $expiresIn;
    public $price;
    public $negotiable;
    public $condition;
    public $usedFor;
    public $mageName;
    public $productType;
    public $product_id;
    public $user_id;

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

    public $timestamps = false;
    protected $guarded = [];




}
