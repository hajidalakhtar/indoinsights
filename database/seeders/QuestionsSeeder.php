<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class QuestionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = DB::table('users')->select('id')->get();
        $rooms = DB::table('rooms')->select('id')->get();

        $data = [
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'question' => 'Apa tempat terbaik di Bandung?',
                'tags' => json_encode(['bandung', 'tag2']),
                'room_id' => $rooms->random()->id,
                'location' => 'Location 1',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'question' => 'Berapa budget untuk liburan ke Bali yang Anda sarankan?',
                'tags' => json_encode(['tag3', 'tag4']),
                'room_id' => $rooms->random()->id,
                'location' => 'Location 2',
                'created_at' => now(),
                'updated_at' => now()
            ],
            // Add more data as needed
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'question' => 'Apa aktivitas menarik yang bisa dilakukan di Jakarta?',
                'tags' => json_encode(['jakarta', 'tag5']),
                'room_id' => $rooms->random()->id,
                'location' => 'Location 3',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'question' => 'Rekomendasikan restoran enak di Surabaya!',
                'tags' => json_encode(['surabaya', 'tag6']),
                'room_id' => $rooms->random()->id,
                'location' => 'Location 4',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'question' => 'Tempat wisata favorit di Yogyakarta?',
                'tags' => json_encode(['yogyakarta', 'tag7']),
                'room_id' => $rooms->random()->id,
                'location' => 'Location 5',
                'created_at' => now(),
                'updated_at' => now()
            ],
            // Add more data as needed
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'question' => 'Bagaimana cara menuju Bandara Soekarno-Hatta?',
                'tags' => json_encode(['bandara', 'transportasi']),
                'room_id' => $rooms->random()->id,
                'location' => 'Location 6',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'question' => 'Rekomendasikan penginapan murah di Bandung!',
                'tags' => json_encode(['bandung', 'penginapan']),
                'room_id' => $rooms->random()->id,
                'location' => 'Location 7',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'question' => 'Tempat belanja terbaik di Surabaya?',
                'tags' => json_encode(['surabaya', 'belanja']),
                'room_id' => $rooms->random()->id,
                'location' => 'Location 8',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'question' => 'Apakah ada pantai yang bagus di sekitar Jakarta?',
                'tags' => json_encode(['jakarta', 'pantai']),
                'room_id' => $rooms->random()->id,
                'location' => 'Location 9',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'user_id' => $users->random()->id,
                'question' => 'Apakah ada taman hiburan di Bandung?',
                'tags' => json_encode(['bandung', 'taman hiburan']),
                'room_id' => $rooms->random()->id,
                'location' => 'Location 10',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ];

        DB::table('questions')->insert($data);

    }
}
