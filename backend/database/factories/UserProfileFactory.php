<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UserProfileFactory extends Factory
{

    public function definition()
    {
        return [
            'gender' => 'male',
            'birthdate' => fake()->date(),
            'pronouns' => 'ele/dele',
            'social_name' => '',
            'disease' => '',
            'stage' => '',
            'place_treatment' => '',
            'address' => fake()->address(),
            'city' => fake()->city(),
            'state' => fake()->region(),
            'job' => fake()->jobTitle(),
            'workplace' => fake()->company(),
            'cpf' => fake()->cpf(),
            'rg' => fake()->rg(),
        ];
    }
}
