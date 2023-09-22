<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    
    public function show($id)
    {
        try {
            $user = User::find($id)->with('info', 'comments', 'posts')->first();

            if ($user) {
                return sendSuccess($user, 'User returned');
            } else {
                return sendSuccess(null, 'User not found');
            }
        } catch (\Throwable $th) {
            return sendError('Error to get user', $th);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            // TODO
        } catch (\Throwable $th) {
            return sendError('Error to update user', $th);
        }
    }
    
    public function destroy($id)
    {
        try {
            $user = User::find($id);

            if ($user->delete()) {
                return sendSuccess(['success' => true], 'User returned');
            } else {
                return sendSuccess(['success' => false], 'User not found');
            }
        } catch (\Throwable $th) {
            return sendError('Error to delete user', $th);
        }
    }
}
