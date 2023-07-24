<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class ImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $rooms = DB::table('rooms')->select('id')->get();

        $images = [
            [
                'name'        => 'Image A',
                'path'        => 'path_to_image_a.jpg',
                'type'        => 'image/jpeg',
                'size'        => '1024',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'name'        => 'Image B',
                'path'        => 'path_to_image_b.jpg',
                'type'        => 'image/jpeg',
                'size'        => '2048',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'name'        => 'Image B',
                'path'        => 'path_to_image_b.jpg',
                'type'        => 'image/jpeg',
                'size'        => '2048',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'name'        => 'Image B',
                'path'        => 'path_to_image_b.jpg',
                'type'        => 'image/jpeg',
                'size'        => '2048',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'name'        => 'Image B',
                'path'        => 'path_to_image_b.jpg',
                'type'        => 'image/jpeg',
                'size'        => '2048',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
        ];

        $data = [];

        foreach ($images as $image) {
            $data[] = array_merge($image, [
                'id'         => Uuid::uuid4(),
                'target_id'  => $rooms->random()->id,
            ]);
        }

        DB::table('images')->insert($data);
    }
}
