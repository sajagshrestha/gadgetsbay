<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{

    protected $fillable =['comment','reply_id','ad_id','user_id'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
