<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friendship extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'friend_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function friend()
    {
        return $this->belongsTo(User::class, 'friend_id');
    }

    public function getFriendship(int $userId, int $friendId): ?Friendship
    {
        return self::where('user_id', $userId)
            ->where('friend_id', $friendId)
            ->orWhere(function ($query) use ($userId, $friendId) {
                $query->where('user_id', $friendId)
                    ->where('friend_id', $userId);
            })
            ->first();
    }

    public function verifyFriendship(int $userId, int $friendId): bool
    {
        return !is_null($this->getFriendship($userId, $friendId));
    }

    public function makeFriendship(int $userId, int $friendId): ?Friendship
    {
        $friendship = $this->getFriendship($userId, $friendId);
        if ($friendship) {
            return $friendship;
        }
    
        $friendship = new Friendship();
        $friendship->user_id = $userId;
        $friendship->friend_id = $friendId;
        $friendship->save();
    
        return $friendship;
    }
}
