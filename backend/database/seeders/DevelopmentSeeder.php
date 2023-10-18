<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Post;
use App\Models\Media;

class DevelopmentSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run()
    {
        // users
        User::factory()
            ->count(50)
            ->hasInfo(5)
            ->has(
                Post::factory()->hasMedias(3)->count(5)
            )
            ->hasResponsibleEvents(1)
            ->create();

        // defining a default user
        User::find(1)->update(['email' => 'teste@teste.com']);
    }
}
