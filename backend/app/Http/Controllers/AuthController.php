<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
          $request->validate([
            'email' => 'required',
            'password' => 'required',
          ]);
      
          $user = User::where('email', $request->email)->first();
      
          if (!$user) {
            return $this->sendSuccess(['token' => null], 'Nenhum usuário encontrado com o email fornecido', 403);
          }
      
          if (!Hash::check($request->password, $user->password)) {
            return $this->sendSuccess(['token' => null], 'A senha fornecida está incorreta', 403);
          }
      
          return $this->sendSuccess(['token' => $user->createToken('auth')->plainTextToken]);
        } catch (\Throwable $th) {
          return $this->sendError('Erro ao logar', $th);
        }
    }

    public function register(Request $request)
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

    public function logout(Request $request)
    {
        try {
          $result = Auth::user()->tokens()->delete();

          return $this->sendSuccess($result, 'Logout realizado com sucesso');
        } catch (\Throwable $th) {
          DB::rollback();
          return $this->sendError('Erro ao criar abordagem', $th);
        }
    }
    
    public function checkEmail(Request $request)
    {
        try {
    
            return $this->sendSuccess(null);
        } catch (\Throwable $th) {
            return $this->sendError('Error to auth', $th);
        }
    }
    
    public function checkPhone(Request $request)
    {
        try {
    
            return $this->sendSuccess(null);
        } catch (\Throwable $th) {
            return $this->sendError('Error to auth', $th);
        }
    }
}
