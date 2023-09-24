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

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $with = [
        'info'
    ];

    public function info()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
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
        return $this->hasMany(PrivateMessage::class);
    }

    public function notification()
    {
        return $this->hasMany(Notification::class);
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

    public function getAgeAttribute()
    {
        return now()->diffInYears($this->info->birthday);
    }

    public function getSignAttribute()
    {
        $day = $this->info->birthday->format('j');
        $month = $this->info->birthday->format('n');

        $signs = [
            ['name' => 'Áries', 'begin' => '03-21', 'end' => '04-19'],
            ['name' => 'Touro', 'begin' => '04-20', 'end' => '05-20'],
            ['name' => 'Gêmeos', 'begin' => '05-21', 'end' => '06-20'],
            ['name' => 'Câncer', 'begin' => '06-21', 'end' => '07-22'],
            ['name' => 'Leão', 'begin' => '07-23', 'end' => '08-22'],
            ['name' => 'Virgem', 'begin' => '08-23', 'end' => '09-22'],
            ['name' => 'Libra', 'begin' => '09-23', 'end' => '10-22'],
            ['name' => 'Escorpião', 'begin' => '10-23', 'end' => '11-21'],
            ['name' => 'Sagitário', 'begin' => '11-22', 'end' => '12-21'],
            ['name' => 'Capricórnio', 'begin' => '12-22', 'end' => '01-19'],
            ['name' => 'Aquário', 'begin' => '01-20', 'end' => '02-18'],
            ['name' => 'Peixes', 'begin' => '02-19', 'end' => '03-20'],
        ];

        foreach ($signs as $sign) {
            $begin = \Carbon\Carbon::createFromFormat('m-d', $sign['begin']);
            $end = \Carbon\Carbon::createFromFormat('m-d', $sign['end']);

            if (($day >= $begin->day && $month == $begin->month) || ($day <= $end->day && $month == $end->month)) {
                return $sign['name'];
            }
        }

        return 'Desconhecido';
    }
}
