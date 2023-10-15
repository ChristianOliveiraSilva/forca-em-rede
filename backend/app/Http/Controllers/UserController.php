<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    
    public function show($id)
    {
        try {
            $user = User::find($id)->with('comments', 'posts')->first();

            if ($user) {
                return $this->sendSuccess($user, 'User returned');
            } else {
                return $this->sendSuccess(null, 'User not found');
            }
        } catch (\Throwable $th) {
            return $this->sendError('Error to get user', $th);
        }
    }

    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            $user = new User();
            $user->email = $request->email;
            $user->name = $request->name;
            $user->password = $request->password;
            $user->username = $request->username;
            $user->phone = $request->phone;
            $user->save();

            $userProfile = new UserProfile();
            $userProfile = $request->gender;
            $userProfile = $request->birthdate;
            $userProfile = $request->pronouns;
            $userProfile = $request->social_name;
            $userProfile = $request->disease;
            $userProfile = $request->stage;
            $userProfile = $request->place_treatment;
            $userProfile = $request->address;
            $userProfile = $request->city;
            $userProfile = $request->state;
            $userProfile = $request->job;
            $userProfile = $request->workplace;
            $userProfile = $request->cpf;
            $userProfile = $request->rg;
            $userProfile->user_id = $user->id;
            $userProfile->save();

            $user->refresh();

            DB::commit();

            return $this->sendSuccess($user, 'User created', 201);
        } catch (\Throwable $th) {
            DB::rollback();
            return $this->sendError('Error creating user', $th);
        }
    }

    public function update(Request $request, User $user)
    {
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
            
            if ($request->gender) {
                $userProfile = $request->gender;
            }
            
            if ($request->birthdate) {
                $userProfile = $request->birthdate;
            }
            
            if ($request->pronouns) {
                $userProfile = $request->pronouns;
            }
            
            if ($request->social_name) {
                $userProfile = $request->social_name;
            }
            
            if ($request->disease) {
                $userProfile = $request->disease;
            }
            
            if ($request->stage) {
                $userProfile = $request->stage;
            }
            
            if ($request->place_treatment) {
                $userProfile = $request->place_treatment;
            }
            
            if ($request->address) {
                $userProfile = $request->address;
            }
            
            if ($request->city) {
                $userProfile = $request->city;
            }
            
            if ($request->state) {
                $userProfile = $request->state;
            }
            
            if ($request->job) {
                $userProfile = $request->job;
            }
            
            if ($request->workplace) {
                $userProfile = $request->workplace;
            }
            
            if ($request->cpf) {
                $userProfile = $request->cpf;
            }
            
            if ($request->rg) {
                $userProfile = $request->rg;
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
            $user = User::find($id);

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
