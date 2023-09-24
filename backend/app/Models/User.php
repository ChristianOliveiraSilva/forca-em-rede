<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laratrust\Traits\LaratrustUserTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;

class User extends Authenticatable
{
    use SoftDeletes;
    use LaratrustUserTrait;
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function info()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function posts()
    {
        return $this->hasMany(UserProfile::class);
    }

    public function comments()
    {
        return $this->hasMany(UserProfile::class);
    }

    public function likes()
    {
        return $this->hasMany(UserProfile::class);
    }

    public function friendships()
    {
        return $this->hasMany(Friendship::class, 'user_id');
    }

    public function friends()
    {
        return $this->hasMany(Friendship::class, 'user_id')->with('friend');
    }

    public function friendOf()
    {
        return $this->hasMany(Friendship::class, 'friend_id')->with('user');
    }

    public function privateMessages()
    {
        return $this->hasMany(UserProfile::class);
    }

    public function notification()
    {
        return $this->hasMany(UserProfile::class);
    }

    public function responsibleEvents()
    {
        return $this->hasMany(Event::class);
    }

    public function participations()
    {
        return $this->hasMany(Participant::class);
    }
    
    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => $this->info->social_name ?? $value,
        );
    }

    public function seeNotification(Notification $notification): bool
    {
        if ($this->id === $notification->user_id) {
            return $notification->update(['seen_at' => true]);
        }
        
        throw new \App\Exceptions\UnauthorizedException("Error Processing Request", 1);
    }
}
