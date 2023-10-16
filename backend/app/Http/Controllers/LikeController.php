<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Like;

class LikeController extends Controller
{
    public function store(Request $request)
    {
        try {
            $like = new Like();
            $like->user_id = Auth::id();
            $like->post_id = $request->post_id;
            $like->save();
    
            return $this->sendSuccess(['like' => $like], 'Like created', 201);
        } catch (\Throwable $th) {
            return $this->sendError('Error to create like', $th);
        }
    }

    public function show(Like $like)
    {
        try {
            return $this->sendSuccess(['like' => $like], 'Like returned');
        } catch (\Throwable $th) {
            return $this->sendError('Error to get like', $th);
        }
    }

    public function showByUser($userId)
    {
        try {
            $comments = Like::where('user_id', $userId)->get();

            return $this->sendSuccess(['like' => $like], 'Likes returned');
        } catch (\Throwable $th) {
            return $this->sendError('Error to get likes', $th);
        }
    }

    public function destroy(Like $like)
    {
        try {
            return $this->sendSuccess(['result' => $like->delete()], 'Like deleted');
        } catch (\Throwable $th) {
            return $this->sendError('Error to delete like', $th);
        }
    }
}
