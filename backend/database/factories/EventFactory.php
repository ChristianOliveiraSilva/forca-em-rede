<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    public function definition()
    {
        return [
            'title' => "Evento",
            'description' => fake()->realText(),
            'start_date' => now(),
            'end_date' => now(),
            'picture' => 'anonimo.webp',
        ];
    }
}
