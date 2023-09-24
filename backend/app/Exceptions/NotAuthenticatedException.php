<?php
 
namespace App\Exceptions;
 
use Exception;
 
class NotAuthenticatedException extends Exception
{
    public function __construct (string $message = "Not Authenticated Operation") {
        $this->message = $message;
    }
}