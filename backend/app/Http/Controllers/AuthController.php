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
      
          return $this->sendSuccess(['token' => $user->createToken('auth')->plainTextToken, 'user' => $user]);
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
            $user->password = Hash::make($request->password);
            $user->username = $request->username;
            $user->phone = $request->phone;
            $user->save();

            $userProfile = new UserProfile();
            $userProfile->gender = $request->gender;
            $userProfile->birthdate = $request->birthdate;
            $userProfile->pronouns = $request->pronouns;
            $userProfile->social_name = $request->social_name;
            $userProfile->disease = $request->disease;
            $userProfile->stage = $request->stage;
            $userProfile->place_treatment = $request->place_treatment;
            $userProfile->address = $request->address;
            $userProfile->city = $request->city;
            $userProfile->state = $request->state;
            $userProfile->job = $request->job;
            $userProfile->workplace = $request->workplace;
            $userProfile->cpf = $request->cpf;
            $userProfile->rg = $request->rg;
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
          $result = ['result' => false];

          if (Auth::user()) {
            $result = ['result' => Auth::user()->tokens()->delete()];
          }

          return $this->sendSuccess($result, 'Logout realizado com sucesso');
        } catch (\Throwable $th) {
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
