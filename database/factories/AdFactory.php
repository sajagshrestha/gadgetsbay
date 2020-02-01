<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Ad;
use Faker\Generator as Faker;

$factory->define(Ad::class, function (Faker $faker) {
    $expiresIn = [14,30,60,90,120];
    $expiresIn =$expiresIn[rand(0,4)];
    return [
        'title' => $faker->company,
        'description' => $faker->text,
        'expiresIn' => $expiresIn,
        'price' => $faker->randomFloat(2,100,1100),
        'negotiable' => rand(1,2),
        'condition' => rand(1,5),
        'usedFor' => rand(1,5),
        'productType' => 'phone',
        'user_id' => 1

    ];
});
