<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(Request $request)
    {
        try {
            $users = User::all();

            return $this->sendSuccess(['users' => $users], 'Users retrieved');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving Users', $th);
        }
    }

    public function show($id)
    {
        try {
            $user = User::where('id', $id)->with('posts.user.info', 'friends', 'responsibleEvents')->first();

            if ($user) {
                return $this->sendSuccess(['user' => $user], 'User returned');
            } else {
                return $this->sendSuccess(null, 'User not found');
            }
        } catch (\Throwable $th) {
            return $this->sendError('Error to get user', $th);
        }
    }

    public function update(Request $request, User $user)
    {
        if (Auth::id() != $user->id) {
            return $this->sendError("User is not yours", null, 403);
        }

        try {
            DB::beginTransaction();

            if ($request->name) {
                $user->name = $request->name;
            }

            if ($request->username) {
                $user->username = $request->username;
            }

            if ($request->phone) {
                $user->phone = $request->phone;
            }

            $user->save();

            $userProfile = $user->info;
            
            if ($request->info['gender']) {
                $userProfile->gender = $request->info['gender'];
            }
            
            if ($request->info['birthdate']) {
                $userProfile->birthdate = $request->info['birthdate'];
            }
            
            if ($request->info['pronouns']) {
                $userProfile->pronouns = $request->info['pronouns'];
            }
            
            if ($request->info['social_name']) {
                $userProfile->social_name = $request->info['social_name'];
            }
            
            if ($request->info['disease']) {
                $userProfile->disease = $request->info['disease'];
            }
            
            if ($request->info['stage']) {
                $userProfile->stage = $request->info['stage'];
            }
            
            if ($request->info['place_treatment']) {
                $userProfile->place_treatment = $request->info['place_treatment'];
            }
            
            if ($request->info['address']) {
                $userProfile->address = $request->info['address'];
            }
            
            if ($request->info['city']) {
                $userProfile->city = $request->info['city'];
            }
            
            if ($request->info['state']) {
                $userProfile->state = $request->info['state'];
            }
            
            if ($request->info['job']) {
                $userProfile->job = $request->info['job'];
            }
            
            if ($request->info['workplace']) {
                $userProfile->workplace = $request->info['workplace'];
            }
            
            if ($request->info['cpf']) {
                $userProfile->cpf = $request->info['cpf'];
            }
            
            if ($request->info['rg']) {
                $userProfile->rg = $request->info['rg'];
            }

            $userProfile->save();

            $user->refresh();

            DB::commit();

            return $this->sendSuccess($user, 'User updated');
        } catch (\Throwable $th) {
            return $this->sendError('Error to update user', $th);
        }
    }
    
    public function destroy(User $user)
    {
        try {
            if (Auth::id() != $user->id) {
                return $this->sendError("User is not yours", null, 403);
            }

            return $this->sendSuccess(['result' => $user->delete()], 'User deleted');
        } catch (\Throwable $th) {
            return $this->sendError('Error to delete user', $th);
        }
    }
    
    public function registerDeath(User $user)
    {
        try {
            if (Auth::id() != $user->id) {
                return $this->sendError("User is not yours", null, 403);
            }

            $user->is_memory = true;
            $user->save();

            return $this->sendSuccess(['result' => true], 'registered death 🙁');
        } catch (\Throwable $th) {
            return $this->sendError('Error to delete user', $th);
        }
    }
}
