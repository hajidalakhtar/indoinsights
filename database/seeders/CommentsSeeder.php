<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class CommentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = DB::table('users')->get();
        $posts = DB::table('posts')->get();
        $data = [
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'post_id' => $posts->random()->id,
                'content' => "ini komentar pertama",
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'post_id' => $posts->random()->id,
                'content' => "ini komentar kedua",
                'created_at' => now(),
                'updated_at' => now()
            ],
        ];

        DB::table('comments')->insert($data);
    }
}
