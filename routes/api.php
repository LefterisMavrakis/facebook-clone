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

Route::middleware('auth:api')->group(function(){

    //Route::post('/posts','PostController@store');
    //Route::get('/posts','PostController@index');
    //Route::get('/users','UserController@index');
    //Route::get('/users/{user}/posts','UserPostsController@index');
    Route::get('/auth-user','AuthUserController@show');

    Route::apiResources([
       '/posts' => 'PostController',
        '/users' => 'UserController',
        '/users/{user}/posts' => 'UserPostsController',
        '/friend-request' => 'FriendRequestController',
        '/friend-request-response' => 'FriendRequestResponseController',
    ]);
});
