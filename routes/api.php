<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::resource('products','ProductsController');

// List products
Route::get('products','ProductsController@index');

// Create new product
Route::post('product','ProductsController@store');

// View single product
Route::get('product/{id}','ProductsController@show');

// Update product
Route::put('product/{id}','ProductsController@update');


// Delete product
Route::delete('product/{id}','ProductsController@destroy');


