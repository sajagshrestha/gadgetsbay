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
Route::get('products', 'ProductsController@index');
//Route::get('product/create', 'ProductsController@create');

// Create new product
Route::post('product', 'ProductsController@store');

// View single product
Route::get('product/{id}', 'ProductsController@show');

// Update product
Route::put('product/{id}', 'ProductsController@update');

// Delete product
Route::delete('product/{id}', 'ProductsController@destroy');

//Authentication routes
//login route
Route::post('login', 'AuthenticationController@login');

//register route
Route::post('register', 'AuthenticationController@register');

//access control route
//Route::group(['middleware' => 'auth:api'], function ()
//{
//    Route::post('details', 'AuthenticationController@details');
//});



