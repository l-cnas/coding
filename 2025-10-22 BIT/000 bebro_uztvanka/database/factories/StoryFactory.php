<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class StoryFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),

            'content' => fake()->paragraphs(3, true),

            'goal_amount' => fake()->numberBetween(100, 10000),

            'main_image' => null,

            'status' => fake()->randomElement([
                'approved',
                'approved',
                'approved',
                'pending'
            ]),
        ];
    }
}
