<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FriendshipController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::get('login', 'AuthController@login');
        Route::post('register', 'AuthController@register');
        Route::post('checkEmail', 'AuthController@checkEmail');
        Route::post('checkPhone', 'AuthController@checkPhone');
    });

    Route::prefix('chat')->group(function () {
        Route::post('message', 'ChatController@storeMessage');
        Route::post('deleteMessage/{privateMessage}', 'ChatController@deleteMessage');
        Route::get('showConversation/{otherUser}', 'ChatController@showConversation');
        Route::post('registerSeen/{privateMessage}', 'ChatController@registerSeen');
    });

    Route::prefix('comments')->group(function () {
        Route::post('store', 'CommentController@store');
        Route::get('show/{comment}', 'CommentController@show');
        Route::get('showByUser/{userId}', 'CommentController@showByUser');
        Route::get('showByPost/{postId}', 'CommentController@showByPost');
        Route::put('update/{comment}', 'CommentController@update');
        Route::delete('destroy/{comment}', 'CommentController@destroy');
    });

    Route::prefix('events')->group(function () {
        Route::get('index', 'EventController@index');
        Route::post('store', 'EventController@store');
        Route::get('show/{event}', 'EventController@show');
        Route::put('update/{event}', 'EventController@update');
        Route::delete('destroy/{event}', 'EventController@destroy');
        Route::post('participate/{event}', 'EventController@participate');
    });

    Route::prefix('friendship')->group(function () {
        Route::get('show/{friendId}', 'FriendshipController@show');
        Route::post('verify/{friendId}', 'FriendshipController@verify');
        Route::post('store/{friendId}', 'FriendshipController@store');
    });

    Route::prefix('likes')->group(function () {
        Route::post('store', 'LikeController@store');
        Route::get('show/{like}', 'LikeController@show');
        Route::get('showByUser/{userId}', 'LikeController@showByUser');
        Route::delete('destroy/{like}', 'LikeController@destroy');
    });

    Route::prefix('notifications')->group(function () {
        Route::get('view/{notification}', 'NotificationController@view');
    });

    Route::prefix('posts')->group(function () {
        Route::get('index', 'PostController@index');
        Route::post('store', 'PostController@store');
        Route::get('show/{post}', 'PostController@show');
        Route::get('showByUser/{userId}', 'PostController@showByUser');
        Route::put('update/{post}', 'PostController@update');
        Route::delete('destroy/{post}', 'PostController@destroy');
    });

    Route::prefix('users')->group(function () {
        Route::get('show', 'UserController@show');
        Route::post('store', 'UserController@store');
        Route::put('update/{user}', 'UserController@update');
        Route::delete('destroy/{user}', 'UserController@destroy');
        Route::post('registerDeath/{user}', 'UserController@registerDeath');
    });
});
