<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Friendship;

class FriendshipController extends Controller
{
    public function show(Request $request)
    {
        try {
            $userId = $request->userId;
            $friendId = $request->friendId;

            $friendship = new Friendship();
            $result = $friendship->getFriendship($userId, $friendId);

            if ($result) {
                return $this->sendSuccess($result, 'Friendship found');
            } else {
                return $this->sendSuccess(null, 'Friendship not found');
            }
        } catch (\Throwable $th) {
            return $this->sendError('Error while fetching friendship', $th);
        }
    }

    public function verify(Request $request)
    {
        try {
            $userId = $request->userId;
            $friendId = $request->friendId;

            $friendship = new Friendship();
            $result = $friendship->verifyFriendship($userId, $friendId);

            if ($result) {
                return $this->sendSuccess(['areFriends' => true], 'Users are friends');
            } else {
                return $this->sendSuccess(['areFriends' => false], 'Users are not friends');
            }
        } catch (\Throwable $th) {
            return $this->sendError('Error while verifying friendship', $th);
        }
    }

    public function store(Request $request)
    {
        try {
            $userId = $request->userId;
            $friendId = $request->friendId;

            $friendship = new Friendship();
            $success = $friendship->makeFriendship($userId, $friendId);

            if ($success) {
                return $this->sendSuccess([], 'Friendship created', 201);
            } else {
                return $this->sendError('Error creating friendship', 400);
            }
        } catch (\Throwable $th) {
            return $this->sendError('Error while creating friendship', $th);
        }
    }
}