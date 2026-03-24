<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@test.pc'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('1234'),
                'is_admin' => true,
                'story_limit' => 999,
                'location' => 'Vilnius',
                'age' => 30,
                'about' => 'Main admin test account.',
            ]
        );

        User::updateOrCreate(
            ['email' => 'user1@test.pc'],
            [
                'name' => 'Test User One',
                'password' => Hash::make('1234'),
                'is_admin' => false,
                'story_limit' => 1,
                'location' => 'Kaunas',
                'age' => 25,
                'about' => 'Regular seeded test user.',
            ]
        );

        User::updateOrCreate(
            ['email' => 'user2@test.pc'],
            [
                'name' => 'Test User Two',
                'password' => Hash::make('1234'),
                'is_admin' => false,
                'story_limit' => 2,
                'location' => 'Klaipeda',
                'age' => 28,
                'about' => 'Another seeded test user.',
            ]
        );
    }
}
