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
        Route::post('login', [AuthController::class, 'login']);
        Route::post('register', [AuthController::class, 'register']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('checkEmail', [AuthController::class, 'checkEmail']);
        Route::post('checkPhone', [AuthController::class, 'checkPhone']);
    });

    Route::prefix('chat')->group(function () {
        Route::post('message', [ChatController::class, 'storeMessage']);
        Route::post('deleteMessage/{privateMessage}', [ChatController::class, 'deleteMessage']);
        Route::get('showConversation/{otherUser}', [ChatController::class, 'showConversation']);
        Route::post('registerSeen/{privateMessage}', [ChatController::class, 'registerSeen']);
    });

    Route::prefix('comments')->group(function () {
        Route::post('store', [CommentController::class, 'store']);
        Route::get('show/{comment}', [CommentController::class, 'show']);
        Route::get('showByUser/{userId}', [CommentController::class, 'showByUser']);
        Route::get('showByPost/{postId}', [CommentController::class, 'showByPost']);
        Route::put('update/{comment}', [CommentController::class, 'update']);
        Route::delete('destroy/{comment}', [CommentController::class, 'destroy']);
    });

    Route::prefix('events')->group(function () {
        Route::get('index', [EventController::class, 'index']);
        Route::post('store', [EventController::class, 'store']);
        Route::get('show/{event}', [EventController::class, 'show']);
        Route::put('update/{event}', [EventController::class, 'update']);
        Route::delete('destroy/{event}', [EventController::class, 'destroy']);
        Route::post('participate/{event}', [EventController::class, 'participate']);
    });

    Route::prefix('friendship')->group(function () {
        Route::get('show/{friendId}', [FriendshipController::class, 'show']);
        Route::post('verify/{friendId}', [FriendshipController::class, 'verify']);
        Route::post('store/{friendId}', [FriendshipController::class, 'store']);
    });

    Route::prefix('likes')->group(function () {
        Route::post('store', [LikeController::class, 'store']);
        Route::get('show/{like}', [LikeController::class, 'show']);
        Route::get('showByUser/{userId}', [LikeController::class, 'showByUser']);
        Route::delete('destroy/{like}', [LikeController::class, 'destroy']);
    });

    Route::prefix('notifications')->group(function () {
        Route::get('view/{notification}', [NotificationController::class, 'view']);
    });

    Route::prefix('posts')->group(function () {
        Route::get('index', [PostController::class, 'index']);
        Route::post('store', [PostController::class, 'store']);
        Route::get('show/{post}', [PostController::class, 'show']);
        Route::get('showByUser/{userId}', [PostController::class, 'showByUser']);
        Route::put('update/{post}', [PostController::class, 'update']);
        Route::delete('destroy/{post}', [PostController::class, 'destroy']);
    });

    Route::prefix('users')->group(function () {
        Route::get('show', [UserController::class, 'show']);
        Route::post('store', [UserController::class, 'store']);
        Route::put('update/{user}', [UserController::class, 'update']);
        Route::delete('destroy/{user}', [UserController::class, 'destroy']);
        Route::post('registerDeath/{user}', [UserController::class, 'registerDeath']);
    });
});
