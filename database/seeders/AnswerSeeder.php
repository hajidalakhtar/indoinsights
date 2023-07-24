<?php

namespace Database\Seeders;

use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
//        $faker = Faker::create();
//        $questions = DB::table('questions')->pluck('id')->toArray();
//        $users = DB::table('users')->pluck('id')->toArray();
//        $answers = [];
//        $answerCount = 20; // Ubah sesuai kebutuhan Anda
//
//        for ($i = 0; $i < $answerCount; $i++) {
//            $answer = [
//                'id' => Uuid::uuid4(),
//                'user_id' => $users[array_rand($users)],
//                'question_id' => $questions[array_rand($questions)],
//                'answer' => $faker->realText,
//                'created_at' => now(),
//            ];
//
//            $answers[] = $answer;
//        }
//
//        DB::table('answers')->insert($answers);
    }
}
