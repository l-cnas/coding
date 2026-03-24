<?php

namespace Database\Seeders;

use App\Models\Story;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class StorySeeder extends Seeder
{
    public function run(): void
    {
        $user1 = User::where('email', 'user1@test.pc')->first();
        $user2 = User::where('email', 'user2@test.pc')->first();

        if (!$user1 || !$user2) {
            return;
        }

        $tagHelp = Tag::firstOrCreate(['name' => 'help']);
        $tagCommunity = Tag::firstOrCreate(['name' => 'community']);
        $tagAnimals = Tag::firstOrCreate(['name' => 'animals']);
        $tagSupport = Tag::firstOrCreate(['name' => 'support']);

        $story1 = Story::updateOrCreate(
            [
                'user_id' => $user1->id,
                'title' => 'Help repair the beaver dam',
            ],
            [
                'content' => 'The beaver dam needs repairs before the water breaks through. We need support for tools, wood, and transport.',
                'goal_amount' => 1000.00,
                'main_image' => null,
                'status' => 'approved',
            ]
        );

        $story1->tags()->sync([$tagHelp->id, $tagAnimals->id, $tagSupport->id]);

        $story2 = Story::updateOrCreate(
            [
                'user_id' => $user2->id,
                'title' => 'Community workshop equipment',
            ],
            [
                'content' => 'We want to buy equipment for a small local workshop where people can learn and build simple projects together.',
                'goal_amount' => 2500.00,
                'main_image' => null,
                'status' => 'approved',
            ]
        );

        $story2->tags()->sync([$tagCommunity->id, $tagSupport->id]);

        $story3 = Story::updateOrCreate(
            [
                'user_id' => $user2->id,
                'title' => 'Pending test story',
            ],
            [
                'content' => 'This is a seeded pending story so admin approval can be tested.',
                'goal_amount' => 500.00,
                'main_image' => null,
                'status' => 'pending',
            ]
        );

        $story3->tags()->sync([$tagHelp->id]);
    }
}
