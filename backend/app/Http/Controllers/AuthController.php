<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\PrivateMessage;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
    
            return $this->sendSuccess(null);
        } catch (\Throwable $th) {
            return $this->sendError('Error to auth', $th);
        }
    }
    
    public function register(Request $request)
    {
        try {
    
            return $this->sendSuccess(null);
        } catch (\Throwable $th) {
            return $this->sendError('Error to auth', $th);
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
