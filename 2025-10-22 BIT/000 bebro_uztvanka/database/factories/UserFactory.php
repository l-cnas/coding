<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected static ?string $password = null;

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('1234'),
            'remember_token' => Str::random(10),

            'is_admin' => false,
            'story_limit' => fake()->numberBetween(1, 3),

            'location' => fake()->city(),
            'age' => fake()->numberBetween(18, 70),
            'about' => fake()->sentence(10),
        ];
    }
}
