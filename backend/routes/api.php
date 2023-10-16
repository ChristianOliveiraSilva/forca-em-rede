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
use App\Http\Controllers\ReportController;

Route::prefix('v1')->group(function () {
    Route::get('hi', function () {
        return 'hello';
    });

    Route::prefix('auth')->group(function () {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('register', [AuthController::class, 'register']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('checkEmail', [AuthController::class, 'checkEmail']);
        Route::post('checkPhone', [AuthController::class, 'checkPhone']);
    });

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::prefix('chat')->group(function () {
            Route::post('message', [ChatController::class, 'storeMessage']);
            Route::post('deleteMessage/{privateMessage}', [ChatController::class, 'deleteMessage']);
            Route::get('showConversation/{otherUser}', [ChatController::class, 'showConversation']);
            Route::post('registerSeen/{privateMessage}', [ChatController::class, 'registerSeen']);
        });

        Route::prefix('comment')->group(function () {
            Route::post('store', [CommentController::class, 'store']);
            Route::get('show/{comment}', [CommentController::class, 'show']);
            Route::get('showByUser/{userId}', [CommentController::class, 'showByUser']);
            Route::get('showByPost/{postId}', [CommentController::class, 'showByPost']);
            Route::put('update/{comment}', [CommentController::class, 'update']);
            Route::delete('destroy/{comment}', [CommentController::class, 'destroy']);
        });

        Route::prefix('event')->group(function () {
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

        Route::prefix('like')->group(function () {
            Route::post('store', [LikeController::class, 'store']);
            Route::get('show/{like}', [LikeController::class, 'show']);
            Route::get('showByUser/{userId}', [LikeController::class, 'showByUser']);
            Route::delete('destroy/{like}', [LikeController::class, 'destroy']);
        });

        Route::prefix('notification')->group(function () {
            Route::get('view/{notification}', [NotificationController::class, 'view']);
        });

        Route::prefix('post')->group(function () {
            Route::get('', [PostController::class, 'index']);
            Route::post('', [PostController::class, 'store']);
            Route::get('{post}', [PostController::class, 'show']);
            Route::get('showByUser/{userId}', [PostController::class, 'showByUser']);
            Route::put('{post}', [PostController::class, 'update']);
            Route::delete('{post}', [PostController::class, 'destroy']);
        })->middleware(['auth:sanctum', 'adasds']);

        Route::prefix('user')->group(function () {
            Route::get('show', [UserController::class, 'show']);
            Route::put('update/{user}', [UserController::class, 'update']);
            Route::delete('destroy/{user}', [UserController::class, 'destroy']);
            Route::post('registerDeath/{user}', [UserController::class, 'registerDeath']);
        });
    
        Route::prefix('report')->group(function () {
            Route::post('press/contact', [ReportController::class, 'pressContact']);
            Route::post('contact', [ReportController::class, 'contact']);
            Route::post('bug', [ReportController::class, 'bug']);
            Route::post('complaint', [ReportController::class, 'complaint']);
        });
    });
});
