<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Story;
use App\Models\Tag;
use App\Models\Donation;
use App\Models\Like;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // admin
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => Hash::make('1234'),
            'is_admin' => true,
            'story_limit' => 999,
            'location' => 'Vilnius',
            'age' => 30,
            'about' => 'Admin account',
        ]);

        // users
        $users = User::factory(15)->create();

        // tags
        $tags = Tag::factory(12)->create();

        $allUsers = User::where('is_admin', false)->get();

        foreach ($allUsers as $user) {

            $storyCount = fake()->numberBetween(0, 3);

            $stories = Story::factory($storyCount)->create([
                'user_id' => $user->id,
            ]);

            foreach ($stories as $story) {

                // attach tags
                $story->tags()->attach(
                    $tags->random(fake()->numberBetween(1, 4))->pluck('id')->toArray()
                );

                if ($story->status === 'approved') {

                    // donations
                    $donors = $allUsers
                        ->where('id', '!=', $user->id)
                        ->shuffle()
                        ->take(fake()->numberBetween(0, 5));

                    foreach ($donors as $donor) {
                        Donation::create([
                            'story_id' => $story->id,
                            'user_id' => $donor->id,
                            'amount' => fake()->numberBetween(5, 200),
                        ]);
                    }

                    // likes
                    $likers = $allUsers
                        ->where('id', '!=', $user->id)
                        ->shuffle()
                        ->take(fake()->numberBetween(0, 8));

                    foreach ($likers as $liker) {
                        Like::create([
                            'story_id' => $story->id,
                            'user_id' => $liker->id,
                        ]);
                    }
                }
            }
        }
    }
}
