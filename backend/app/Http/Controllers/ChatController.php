<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\PrivateMessage;

class ChatController extends Controller
{
    public function storeMessage(Request $request)
    {
        try {
            PrivateMessage::where('sender_id', $request->receiver_id)
                ->where('receiver_id', Auth::id())->update(['seen_at' => now()]);

            $privateMessage = new PrivateMessage();
            $privateMessage->sender_id = Auth::id();
            $privateMessage->receiver_id = $request->receiver_id;
            $privateMessage->message_content = $request->message_content;
            $privateMessage->save();
    
            return $this->sendSuccess($privateMessage, 'Private Message created', 201);
        } catch (\Throwable $th) {
            return $this->sendError('Error to create Private Message', $th);
        }
    }

    public function deleteMessage(PrivateMessage $privateMessage)
    {
        try {
            return $this->sendSuccess(['result' => $privateMessage->delete()], 'Private Message deleted');
        } catch (\Throwable $th) {
            return $this->sendError('Error to delete Private Message', $th);
        }
    }

    public function showConversation(Request $request, int $otherUser)
    {
        try {
            $privateMessages = PrivateMessage::where(function ($query) use ($otherUser) {
                $query->where('sender_id', Auth::id())
                    ->where('receiver_id', $otherUser);
            })
            ->orWhere(function ($query) use ($otherUser) {
                $query->where('sender_id', $otherUser)
                    ->where('receiver_id', Auth::id());
            })
            ->orderBy('created_at', 'desc')
            ->get();

            return $this->sendSuccess(['chat' => $privateMessages], 'Conversation returned');
        } catch (\Throwable $th) {
            return $this->sendError('Error to get Conversation', $th);
        }
    }

    public function registerVisualization(PrivateMessage $privateMessage)
    {
        try {
            $privateMessage->seen_at = now();
            $privateMessage->save();

            return $this->sendSuccess($privateMessage, 'Registered', 201);
        } catch (\Throwable $th) {
            return $this->sendError('Error to Registered seen in Private Message', $th);
        }
    }
}
