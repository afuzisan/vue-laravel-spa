<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'administrator',
            'email' => 'administrator@example.com',
            'authority' => 1,
        ]);
        User::factory()->create([
            'name' => 'administrator2',
            'email' => 'administrator2@example.com',
            'authority' => 2,
        ]);
        User::factory()->create([
            'name' => 'administrator3',
            'email' => 'administrator3@example.com',
            'authority' => 3,
        ]);
        User::factory()->create([
            'name' => 'user',
            'email' => 'user@example.com',
            'authority' => 4,
        ]);
    }
}
