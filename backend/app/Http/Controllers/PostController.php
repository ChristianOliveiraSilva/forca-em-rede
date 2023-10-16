<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Media;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function index()
    {
        try {
            $posts = Post::all()->load('user.info')->load('likes')->load('comments');

            return $this->sendSuccess(['posts' => $posts], 'Posts retrieved');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving posts', $th);
        }
    }

    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            $post = new Post();
            $post->content = $request->content;
            $post->user_id = Auth::id();
            $post->save();

            if ($request->file('medias')) {
                foreach ($request->file('medias') as $media) {
                    $path = Storage::putFile('media', $media);
                    
                    $media = new Media();
                    $media->media_url = $path;
                    $media->post_id = $post->id;
                    $media->save();
                }
                
                $post->refresh();
            }
            
            DB::commit();

            $post->load('user.info')->load('likes')->load('medias')->load('comments');

            return $this->sendSuccess(['post' => $post], 'Post created', 201);
        } catch (\Throwable $th) {
            DB::rollback();
            return $this->sendError('Error creating post', $th);
        }
    }

    public function show(Post $post)
    {
        try {
            return $this->sendSuccess($post, 'Post retrieved');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving post', $th);
        }
    }

    public function showByUser($userId)
    {
        try {
            $posts = Post::where('user_id', $userId)->get();

            return $this->sendSuccess($posts, 'Posts retrieved by user');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving posts by user', $th);
        }
    }

    public function update(Request $request, Post $post)
    {
        try {
            $post->title = $request->title;
            $post->content = $request->content;
            $post->save();

            return $this->sendSuccess($post, 'Post updated');
        } catch (\Throwable $th) {
            return $this->sendError('Error updating post', $th);
        }
    }

    public function destroy(Post $post)
    {
        try {
            return $this->sendSuccess(['result' => $post->delete()], 'Post deleted');
        } catch (\Throwable $th) {
            return $this->sendError('Error deleting post', $th);
        }
    }
}
