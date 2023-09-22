<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function sendSuccess($result, $message = null, $code = 200) {
        $response = ['data' => $result, 'status' => true];

        if ($message != null) {
            $response['message'] = $message;
        }

        return response()->json($response, $code);
    }

    public function sendError($error, \Throwable $exception = null, int $code = 500) {
        $response = ['message' => $error, 'status' => false];

        $showDetail = env('APP_DEBUG') == 'true' || request()->input('debug');
        if (!is_null($exception) && $showDetail) {
            $response['error']['message'] = $exception->getMessage();
            $response['error']['code'] = $exception->getCode();
            $response['error']['file'] = $exception->getFile();
            $response['error']['line'] = $exception->getLine();
            $response['error']['trace'] = $exception->getTraceAsString();
        }

        return response()->json($response, $code);
    }
}
