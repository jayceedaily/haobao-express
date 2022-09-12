<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'first_name' => 'Jaycee',
            'last_name' => 'Mariano',
            'email' => 'jaycee@haobao.ph',
        ]);

        \App\Models\User::factory()->create([
            'first_name' => 'Nova',
            'last_name' => 'Mariano',
            'email' => 'info@haobao.ph',
        ]);
    }
}
