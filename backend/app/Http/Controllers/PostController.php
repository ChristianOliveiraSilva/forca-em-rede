<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index()
    {
        try {
            $posts = Post::all();

            return sendSuccess($posts, 'Posts retrieved', 200);
        } catch (\Throwable $th) {
            return sendError('Error retrieving posts', $th);
        }
    }

    public function store(Request $request)
    {
        try {
            $post = new Post();
            $post->title = $request->title;
            $post->content = $request->content;
            $post->user_id = Auth::id();
            $post->save();

            return sendSuccess($post, 'Post created', 201);
        } catch (\Throwable $th) {
            return sendError('Error creating post', $th);
        }
    }

    public function show($id)
    {
        try {
            $post = Post::find($id);

            if (!$post) {
                return sendError('Post not found', null, 404);
            }

            return sendSuccess($post, 'Post retrieved', 200);
        } catch (\Throwable $th) {
            return sendError('Error retrieving post', $th);
        }
    }

    public function showByUser($id)
    {
        try {
            $posts = Post::where('user_id', $id)->get();

            return sendSuccess($posts, 'Posts retrieved by user', 200);
        } catch (\Throwable $th) {
            return sendError('Error retrieving posts by user', $th);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $post = Post::find($id);

            if (!$post) {
                return sendError('Post not found', null, 404);
            }

            $post->title = $request->title;
            $post->content = $request->content;
            $post->save();

            return sendSuccess($post, 'Post updated', 200);
        } catch (\Throwable $th) {
            return sendError('Error updating post', $th);
        }
    }

    public function destroy($id)
    {
        try {
            $post = Post::find($id);

            if (!$post) {
                return sendError('Post not found', null, 404);
            }

            $post->delete();

            return sendSuccess(null, 'Post deleted', 200);
        } catch (\Throwable $th) {
            return sendError('Error deleting post', $th);
        }
    }
}
