<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Log;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function displayMemoryUsage($message = '') {
        $memoryUsage = memory_get_usage(true) / (1024 * 1024); // megabytes
    
        Log::info("Memória usada {$message}: {$memoryUsage} MB");
    }

    private function log() {
        if (request()->route()->uri !== 'api/v1/notification') {
            $this->displayMemoryUsage("Api: ".request()->route()->uri);
        }
    }

    public function sendSuccess($result, $message = null, $code = 200) {
        $response = ['data' => $result, 'status' => true];

        if ($message != null) {
            $response['message'] = $message;
        }

        $this->log();
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

        $this->log();
        return response()->json($response, $code);
    }
}
