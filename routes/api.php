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

// Search product
Route::post('/search', 'SearchController@search');

//Authentication routes
//login route
Route::post('login', 'AuthenticationController@login');

//register route
Route::post('register', 'AuthenticationController@register');


//logout route
Route::middleware('auth:api')->get('logout', 'AuthenticationController@logout');

//access control route
//Route::group(['middleware' => 'auth:api'], function ()
//{
//    Route::post('details', 'AuthenticationController@details');
//});


//search routes
// Search product
Route::post('/search', 'SearchController@search');

// most viewed product
Route::get('/mostviewed', 'SearchController@mostViewed');

// latest product
Route::get('/latest', 'SearchController@latest');

//filer
Route::post('/filter','SearchController@filter');
