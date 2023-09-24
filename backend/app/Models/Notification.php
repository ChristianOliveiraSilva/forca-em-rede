<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Notification extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = [
        'user_id',
        'notification_content',
        'seen_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function createByCategory($category, ?User $user = null)
    {
        $currentUser = $user ?? Auth::user();

        if (!$currentUser) {
            throw new \App\Exceptions\NotAuthenticatedException();
        }

        return Notification::create([
            'notification_content' => $category, // Implement ENUM
            'user_id' => $user ?? Auth::user()
        ]);
    }
}
