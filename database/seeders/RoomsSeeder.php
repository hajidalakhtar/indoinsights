<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rooms')->insert([
            [
                'id' => 'a0332f8d-350f-4b47-b3d5-11a9a3bfc6fe',
                'name' => 'Life',
                'description' => 'Kota Bandung (Sunda: aksara Sunda: ᮊᮧᮒ ᮘᮔ᮪ᮓᮥᮀ) Tentang suara ini dengarkan (bantuan·info) adalah ibu kota Provinsi Jawa Barat yang sekaligus menjadi pusat pemerintahan dan perekonomian dari Provinsi Jawa Barat, Indonesia. Kota Bandung juga merupakan kota terbesar ketiga di Indonesia setelah Jakarta dan Surabaya. Bandung merupakan kota terpadat kedua di Indonesia setelah Jakarta dengan kepadatan mencapai 15.051 jiwa/km2.',
                'icon' => 'https://ik.imagekit.io/jh2scbhjww/bandung_RJ5s4tpxa.jpeg?updatedAt=1686748765948',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'b235e8fd-d46a-4de2-9e14-225f8a58b1f0',
                'name' => 'Meme',
                'description' => 'Kota Jakarta (Sunda: ᮊᮧᮒ ᮏᮀᮊ᮪ᮊᮤ, bahasa Inggris: Jakarta) adalah ibu kota negara Republik Indonesia sekaligus satu-satunya kota di Indonesia yang memiliki status setingkat provinsi. Jakarta terletak di pesisir bagian barat laut Pulau Jawa. Dahulu, Jakarta dikenal dengan beberapa nama di antaranya Sunda Kelapa, Jayakarta, dan Batavia. Nama Sunda Kelapa hanya digunakan untuk wilayah pelabuhan, sedangkan ibu kota Kerajaan Sunda masih tetap berada di Pakuan (sekarang Bogor). Nama Jayakarta digunakan ketika wilayah ini dikuasai oleh Kesultanan Banten. Sedangkan nama Batavia digunakan ketika wilayah ini dikuasai oleh VOC. Nama Batavia kemudian diganti menjadi Djakarta pada masa pendudukan Jepang, dan kemudian disebut Jakarta pada masa kemerdekaan.',
                'icon' => 'https://ik.imagekit.io/jh2scbhjww/jakarta_wNJg8t3rL.jpeg?updatedAt=1686748765863',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'c0332f8d-350f-4b47-b3d5-11a9a3bfc6fe',
                'name' => 'Ekonomi',
                'description' => 'Kota Surabaya adalah kota terbesar kedua di Indonesia setelah Jakarta. Kota ini terletak di Provinsi Jawa Timur dan memiliki sejarah panjang sebagai pusat perdagangan dan industri di Indonesia.',
                'icon' => 'https://ik.imagekit.io/jh2scbhjww/surabaya-city-east-java-icon-landmark-vector-illustration_887045-17_Vng_GTcGA.avif?updatedAt=1690116662148',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'd235e8fd-d46a-4de2-9e14-225f8a58b1f0',
                'name' => 'Politik',
                'description' => 'Kota Medan adalah ibu kota Provinsi Sumatera Utara. Kota ini terletak di Pulau Sumatera dan merupakan salah satu pusat kegiatan ekonomi, bisnis, dan pariwisata di wilayah Sumatera.',
                'icon' => 'https://ik.imagekit.io/jh2scbhjww/medan-background-design_1300-418%20(1)_C21LH_PcJ.avif?updatedAt=1690116744433',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'e127a8f1-1b11-4c5c-a3e8-9b4d2b15d2f2',
                'name' => 'Kecantikan',
                'description' => 'Kota Yogyakarta, juga dikenal sebagai Jogja, adalah ibu kota Provinsi Daerah Istimewa Yogyakarta. Kota ini terletak di Pulau Jawa dan merupakan pusat kebudayaan, pendidikan, dan pariwisata di Indonesia.',
                'icon' => 'https://ik.imagekit.io/jh2scbhjww/indonesia-tugu-jogja-landmark_28257-193_QhGZaR-x5.avif?updatedAt=1690116809223',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

    }
}
