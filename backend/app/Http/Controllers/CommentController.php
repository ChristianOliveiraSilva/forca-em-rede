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

            return sendSuccess($comment, 'Comment created', 201);
        } catch (\Throwable $th) {
            return sendError('Error creating comment', $th);
        }
    }

    public function show($id)
    {
        try {
            $comment = Comment::find($id);

            if (!$comment) {
                return sendError('Comment not found', null, 404);
            }

            return sendSuccess($comment, 'Comment retrieved', 200);
        } catch (\Throwable $th) {
            return sendError('Error retrieving comment', $th);
        }
    }

    public function showByUser($id)
    {
        try {
            $comments = Comment::where('user_id', $id)->get();

            return sendSuccess($comments, 'Comments retrieved by user', 200);
        } catch (\Throwable $th) {
            return sendError('Error retrieving comments by user', $th);
        }
    }

    public function showByPost($id)
    {
        try {
            $comments = Comment::where('post_id', $id)->get();

            return sendSuccess($comments, 'Comments retrieved by post', 200);
        } catch (\Throwable $th) {
            return sendError('Error retrieving comments by post', $th);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $comment = Comment::find($id);

            if (!$comment) {
                return sendError('Comment not found', null, 404);
            }

            $comment->content = $request->content;
            $comment->save();

            return sendSuccess($comment, 'Comment updated', 200);
        } catch (\Throwable $th) {
            return sendError('Error updating comment', $th);
        }
    }

    public function destroy($id)
    {
        try {
            $comment = Comment::find($id);

            if (!$comment) {
                return sendError('Comment not found', null, 404);
            }

            $comment->delete();

            return sendSuccess(null, 'Comment deleted', 200);
        } catch (\Throwable $th) {
            return sendError('Error deleting comment', $th);
        }
    }
}
