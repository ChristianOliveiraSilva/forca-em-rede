<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        try {
            $comment = new Comment();
            $comment->user_id = Auth::id();
            $comment->post_id = $request->post_id;
            $comment->content = $request->content;
            $comment->save();

            return $this->sendSuccess($comment, 'Comment created', 201);
        } catch (\Throwable $th) {
            return $this->sendError('Error creating comment', $th);
        }
    }

    public function show(Comment $comment)
    {
        try {
            return $this->sendSuccess($comment, 'Comment retrieved');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving comment', $th);
        }
    }

    public function showByUser(int $userId)
    {
        try {
            $comments = Comment::where('user_id', $userId)->get();

            return $this->sendSuccess($comments, 'Comments retrieved by user');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving comments by user', $th);
        }
    }

    public function showByPost(int $postId)
    {
        try {
            $comments = Comment::where('post_id', $postId)->get();

            return $this->sendSuccess($comments, 'Comments retrieved by post');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving comments by post', $th);
        }
    }

    public function update(Request $request, Comment $comment)
    {
        try {
            $comment->content = $request->content;
            $comment->save();

            return $this->sendSuccess($comment, 'Comment updated');
        } catch (\Throwable $th) {
            return $this->sendError('Error updating comment', $th);
        }
    }

    public function destroy(Comment $comment)
    {
        try {
            return $this->sendSuccess(['result' => $comment->delete()], 'Comment deleted');
        } catch (\Throwable $th) {
            return $this->sendError('Error deleting comment', $th);
        }
    }
}
