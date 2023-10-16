<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Notification;
use App\Exceptions\UnauthorizedException;

class NotificationController extends Controller
{

    public function index()
    {
        try {
            $notifications = Auth::id() ? Notification::where('user_id', Auth::id())->get() : [];

            return $this->sendSuccess(['notifications' => $notifications], 'Notifications retrieved');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving notifications', $th);
        }
    }
    
    public function view(Notification $notification)
    {
        try {
            if (Auth::user()->seeNotification($notification)) {
                return $this->sendSuccess([
                    'result' => true
                ], 'Notification has been seen');
            } else {
                throw new \Exception("Notification has not updated");
            }
        } catch (UnauthorizedException $th) {
            return $this->sendError("Notification is not yours", $th, 403);
        } catch (\Throwable $th) {
            return $this->sendError("Notification has not been seen", $th);
        }
    }
}
