<?php

use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/*Route::get('/', function () {
    return view('welcome');
});*/
//
//Route::resource('/product','ProductsController');



Route::get('{any}', function () {
    return view('React-Index'); // or wherever your React app is bootstrapped.
})->where('any', '.*');
//Auth::routes();


//Route::get('/home', 'HomeController@index')->name('home');


