<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    public function definition()
    {
        return [
            'title' => fake()->name(),
            'description' => fake()->realText(),
            'start_date' => now(),
            'end_date' => now(),
            'picture' => fake()->imageUrl(640, 480, 'animals', true),
        ];
    }
}
