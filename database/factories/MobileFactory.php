<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Mobile;
use Faker\Generator as Faker;

$factory->define(Mobile::class, function (Faker $faker) {
    $ad_id =factory('App\Ad')->create()->id;
    factory('App\Record')->create([
        'ad_id' => $ad_id
    ]);
    return [
        'frontCamera' => rand(1,8),
        'backCamera' => rand(1,8),
        'RAM' => rand(1,8),
        'internalStorage' => rand(1,8),
        'ad_id'=> $ad_id
    ];
});
