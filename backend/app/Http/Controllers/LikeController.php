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
    
            return sendSuccess($like, 'Like created', 201);
        } catch (\Throwable $th) {
            return sendError('Error to create like', $th);
        }
    }

    public function show($id)
    {
        try {
            $like = Like::find($id);

            if (!$like) {
                return sendError('Like not found', null, 404);
            }

            return sendSuccess($like, 'Like returned');
        } catch (\Throwable $th) {
            return sendError('Error to get like', $th);
        }
    }

    public function showByUser($id)
    {
        try {
            $comments = Like::where('user_id', $id)->get();

            return sendSuccess($like, 'Likes returned');
        } catch (\Throwable $th) {
            return sendError('Error to get likes', $th);
        }
    }

    public function destroy($id)
    {
        try {
            $like = Like::find($id);

            if (!$like) {
                return sendError('Like not found', null, 404);
            }

            $like->delete();

            return sendSuccess($id, 'Like deleted');
        } catch (\Throwable $th) {
            return sendError('Error to delete like', $th);
        }
    }
}
