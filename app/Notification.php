<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = [
        'name', 'email', 'password','phone'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
