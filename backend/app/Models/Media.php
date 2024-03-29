<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Media extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $table = 'medias';

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
