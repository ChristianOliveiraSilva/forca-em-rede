<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\User;
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
          $request->validate([
              'name' => 'required',
              'email' => 'required|email',
              'password' => 'required',
          ]);
      
          $user = User::where('email', $request->email)->first();
      
          if ($user) {
              throw ValidationException::withMessages([
                  ['Usuário já existe'],
              ]);
          }
      
          $user = User::create($request->all());
      
          if (!$user) {
            throw new \Exception("Erro ao criar usuário");
          }
          
          return $this->sendSuccess($user);
        } catch (\Throwable $th) {
          return $this->sendError('Erro ao criar usuário', $th);
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
