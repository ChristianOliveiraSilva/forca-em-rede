<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Media;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FeedController extends Controller
{
    public function index(Request $request)
    {
        try {
            $this->displayMemoryUsage('before get post');

            // posts, ads, sugestão de amizades, eventos
            $posts = Post::with('user.info', 'likes', 'comments')->get();
            $ads = collect([(object)['asdasdsad' => 'asdsadsd']]);
            $friendships = collect([(object)['asdasdsad' => 'asdsadsd']]);
            $events = collect([(object)['asdasdsad' => 'asdsadsd']]);
            
            $posts->transform(fn ($item) => tap($item, fn ($item) => $item->type = 'post'));
            $ads->transform(fn ($item) => tap($item, fn ($item) => $item->type = 'ad'));
            $friendships->transform(fn ($item) => tap($item, fn ($item) => $item->type = 'friendship'));
            $events->transform(fn ($item) => tap($item, fn ($item) => $item->type = 'event'));
            
            $feed = [
                ...$posts,
                ...$ads,
                ...$friendships,
                ...$events,
            ];
            shuffle($feed);
            
            $this->displayMemoryUsage('after get post');
            return $this->sendSuccess(['feed' => $feed], 'Posts retrieved');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving posts', $th);
        }
    }

    public function search(string $term)
    {
        try {
            $this->displayMemoryUsage('before search');
            $posts = Post::with('user.info', 'likes', 'comments')->get();
            $this->displayMemoryUsage('after search');

            return $this->sendSuccess(['posts' => $posts], 'Posts retrieved');
            
        } catch (\Throwable $th) {
            return $this->sendError('Error searching', $th);
        }
    }
}
