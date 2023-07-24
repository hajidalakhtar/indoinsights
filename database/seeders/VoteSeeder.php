<?php

namespace Database\Seeders;

use App\Models\Question;
use App\Models\Room;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $question = Question::all()->random()->first();
        $user = User::all()->random()->first();

        $vote = [
            "user_id" => $user->id,
            "target_id" => $question->id,
            "vote_type" => "upvote",
        ];

        DB::table('votes')->insert($vote);

    }
}
