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
            PrivateMessage::where(['sender_id' => $request->receiver_id, 'receiver_id' => Auth::id()])->update(['seen_at' => now()]);

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

    public function contacts(Request $request)
    {
        try {
            $users = User::where('id', '!=', Auth::id())->get();

            $contacts = [];
    
            foreach ($users as $user) {
                $lastMessage = PrivateMessage::where(function($query) use ($user) {
                    $query->where('sender_id', Auth::id())
                        ->where('receiver_id', $user->id)
                        ->orWhere(function($query) use ($user) {
                            $query->where('sender_id', $user->id)
                                ->where('receiver_id', Auth::id());
                        });
                })->latest()->first() ?? [];
    
                $unreadMessagesCount = PrivateMessage::where('receiver_id', Auth::id())
                    ->where('sender_id', $user->id)
                    ->where('seen_at', null)
                    ->count();
    
                $contacts[] = [
                    'user' => $user,
                    'last_message' => $lastMessage,
                    'unread_messages_count' => $unreadMessagesCount
                ];
            }
            return $this->sendSuccess(['contacts' => $contacts], 'Private Message created', 201);
        } catch (\Throwable $th) {
            return $this->sendError('Error to create Private Message', $th);
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
            ->orderBy('created_at', 'asc')
            ->get();

            PrivateMessage::whereIn('id', $privateMessages->pluck('id'))->update(['seen_at' => now()]);

            return $this->sendSuccess(['chat' => $privateMessages], 'Conversation returned');
        } catch (\Throwable $th) {
            return $this->sendError('Error to get Conversation', $th);
        }
    }
}
