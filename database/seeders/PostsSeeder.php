<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = DB::table('users')->get();
        $rooms = DB::table('rooms')->get();
        $data = [
            [
                'id' => Uuid::uuid4(),
                'title' => 'Menyusuri Pesona Alun-alun Bandung: Keindahan Tengah Kota yang Tak Terlupakan',
                'slug' => 'post-1',
                'body' => '
    <p>Hai para penggemar petualangan dan pecinta wisata! Kali ini, saya akan membawa Anda mengikuti perjalanan menakjubkan saya ke salah satu destinasi paling ikonik di Bandung, yaitu Alun-alun Bandung. Mari kita bersama-sama menjelajahi keajaiban dan pesona dari alun-alun yang tak terlupakan ini.</p>

    <h2>Suasana Kota dengan Sentuhan Kesejukan</h2>

    <p>Setibanya di Alun-alun Bandung, saya langsung merasakan aura kesejukan yang menyegarkan. Taman yang rindang dengan pohon-pohon besar menghadirkan nuansa alami yang begitu mendamaikan, bahkan di tengah hiruk-pikuk kota metropolitan. Suasana alun-alun ini memberikan kontras menarik antara gemerlap kota modern dan keasrian alam yang menyejukkan hati.</p>

    <h2>Momen Romantis di Balik Cahaya Malam</h2>

    <p>Tak hanya indah di siang hari, Alun-alun Bandung juga menawarkan keajaiban tersendiri saat matahari terbenam. Cahaya lampu-lampu di sekitar taman menciptakan suasana romantis yang sempurna untuk berkumpul dengan orang tersayang. Saya sering melihat pasangan muda yang tengah menikmati momen manis mereka di bawah cahaya malam yang gemerlap. Rasanya begitu romantis dan menghangatkan hati.</p>

    <h2>Pesona Arsitektur yang Bersejarah</h2>

    <p>Selain pesonanya yang alami, Alun-alun Bandung juga dipenuhi dengan bangunan-bangunan bersejarah yang menarik perhatian. Salah satunya adalah <em>Gedung Sate</em>, yang menjulang megah dengan arsitektur kolonial yang anggun. Gedung ini telah menjadi ikon kota Bandung dan menjadi latar belakang yang sempurna untuk berfoto. Rasanya seperti berjalan kembali ke masa lalu sambil menikmati pesona masa kini.</p>

    <h2>Surga Kuliner di Pinggiran Alun-alun</h2>

    <p>Tak lengkap rasanya jika berkunjung ke Alun-alun Bandung tanpa mencicipi nikmatnya kuliner khas kota ini. Di sekitar alun-alun, Anda dapat menemukan beragam makanan lezat, mulai dari makanan jalanan hingga restoran yang mewah. Jangan lewatkan kesempatan untuk mencicipi <em>nasi timbel</em>, <em>batagor</em>, atau <em>surabi</em>, karena kelezatannya pasti akan memanjakan lidah Anda.</p>

    <h2>Kesenangan Tak Tergantikan Bersama Keluarga</h2>

    <p>Tak hanya cocok untuk pasangan, Alun-alun Bandung juga merupakan tempat yang ideal untuk berkumpul bersama keluarga. Area bermain yang luas dan nyaman akan membuat anak-anak senang bermain sambil menikmati angin sejuk. Saya sering melihat keluarga yang riang gembira bersama, menikmati momen berharga di bawah sinar matahari.</p>

    <h2>Festival dan Acara Menarik</h2>

    <p>Selalu ada kejutan menarik di Alun-alun Bandung, terutama saat digelar festival atau acara khusus. Dari festival musik, pasar seni, hingga pesta kembang api yang mengagumkan, Anda akan dimanjakan oleh berbagai acara yang menghidupkan suasana alun-alun. Pastikan untuk memeriksa jadwal acara lokal sebelum mengunjungi, agar Anda tidak melewatkan momen spesial yang tak terlupakan.</p>

    <h2>Mencari Kenang-kenangan di Pasar Malam</h2>

    <p>Ingin membawa pulang kenang-kenangan dari Alun-alun Bandung? Jangan lewatkan kesempatan untuk mengunjungi pasar malam yang sering diadakan di sekitar alun-alun. Di sini, Anda dapat menemukan beragam oleh-oleh dan cinderamata khas Bandung yang menarik, seperti kerajinan tangan, kaos, dan aksesori unik.</p>

    <h2>Kesimpulan</h2>

    <p>Alun-alun Bandung adalah surga tengah kota yang memikat hati dan menyimpan berjuta cerita menarik. Jelajahi keindahannya, nikmati kuliner khasnya, dan berbagi momen tak terlupakan bersama orang-orang tercinta. Alun-alun Bandung adalah tempat di mana keajaiban terjadi, dan Anda tak akan pernah bosan kembali ke sini. Yuk, jadikan Alun-alun Bandung sebagai salah satu destinasi wajib dalam daftar perjalanan Anda!</p>
                ',
                'tags' => json_encode(['Bandung', 'Bandung keren bet dahh']),
                'category' => 'Posting',
                'user_id' => $users->random()->id,
                'room_id' => $rooms->random()->id,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'title' => 'Mengenal Keajaiban Yogyakarta: Pesona Budaya, Wisata, dan Kuliner yang Menggoda',
                'slug' => 'post-2',
                'body' => '
    <p>Pada suatu pagi cerah, aku memut
    uskan untuk menjelajahi keajaiban Yogyakarta, sebuah kota dengan pesona budaya, wisata, dan kuliner yang menggoda. Dengan semangat petualangan, aku melangkahkan kaki menuju destinasi pertama, Keraton Yogyakarta.</p>

    <p>Di dalam Keraton yang megah, aku merasakan magisnya kerajaan Jawa yang masih terasa hidup. Aku terpesona dengan arsitektur istana yang indah, perabotan kuno yang dipamerkan, dan cerita-cerita dari abad-abad lampau yang masih terjaga dengan baik. Tak lupa, aku mencicipi jamu istimewa yang hanya bisa ditemukan di sini, jamu racikan nenek moyang keraton.</p>

    <p>Setelah menjelajahi Keraton, aku melanjutkan perjalanan menuju Candi Prambanan. Begitu mengagumkan melihat bangunan Hindu yang megah dengan ornamen-ornamen halus yang menghiasi dindingnya. Matahari sore memancarkan sinarnya yang indah, menciptakan siluet candi yang memukau. Aku tak bisa menahan diri untuk berfoto sebagai kenang-kenangan akan momen berharga ini.</p>

    <p>Dari keindahan Candi Prambanan, aku beralih ke kedamaian Candi Borobudur. Saat matahari terbit, aku memutuskan untuk naik ke atas candi. Pemandangan pegunungan dan sawah yang hijau, serta udara segar, menjadi hadiah istimewa yang membuat hatiku tenang. Aku merenung, menghayati keindahan seni dan spiritualitas yang tergurat di setiap relief candi.</p>

    <p>Tak lengkap rasanya berada di Yogyakarta tanpa mencicipi kuliner khasnya. Di Malioboro, aku mencoba makanan jalanan yang lezat seperti Gudeg, Sate Klatak, dan Bakpia. Di setiap gigitan, perpaduan cita rasa manis dan gurih memanjakan lidahku. Aku juga mencicipi Kopi Joss, kopi unik yang dicampur dengan bara api, memberikan sensasi tak terlupakan.</p>

    <p>Namun, petualangan belum berakhir. Aku melanjutkan perjalanan menuju Pantai Parangtritis. Ombak besar dan angin laut yang menyegarkan menyambut kedatanganku. Aku mencoba naik delman di sepanjang pantai dan menikmati matahari terbenam yang romantis.</p>

    <p>Tidak hanya itu, Yogyakarta juga menawarkan kehidupan seni yang begitu kental. Aku menyempatkan diri untuk menyaksikan pertunjukan wayang kulit dan menari tradisional. Ritme gamelan yang mengalun, bayangan wayang yang bergerak di layar, serta gerakan tarian yang indah membawa aku ke dalam dunia magis seni Jawa.</p>

    <p>Sore harinya, aku mengunjungi Taman Sari, bekas tempat bermain air bagi keluarga kerajaan. Berselancar di dalam air terjun kecil dan menyusuri lorong bawah tanah adalah momen seru yang mengingatkan aku pada masa lampau yang megah.</p>

    <p>Akhirnya, saat itulah aku menyadari betapa Yogyakarta begitu kaya akan budaya, warisan sejarah, dan keindahan alamnya. Tiap sudut kotanya mengajakku untuk jatuh cinta. Namun, aku tahu bahwa cerita petualanganku di Yogyakarta baru saja dimulai. Akan ada banyak lagi cerita yang menanti untuk diungkap di kota ini yang selalu menyimpan kejutan.</p>',

                'tags' => json_encode(['tag3', 'tag4']),
                'category' => 'Posting',
                'user_id' => $users->random()->id,
                'room_id' => $rooms->random()->id,

                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'title' => 'Petualangan Seru di Kota Medan: Menyelami Budaya, Alam, dan Kuliner yang Menggoda',
                'slug' => 'postaa1-2',
                'body' => '
    <p>Pada suatu pagi, aku memulai perjalanan petualanganku ke Kota Medan, sebuah kota yang kaya akan keindahan alam, warisan budaya, dan kuliner lezat. Dengan hati penuh semangat, aku melangkahkan kaki menuju destinasi pertamaku, Istana Maimun.</p>

    <p>Tiba di Istana Maimun, aku takjub dengan keindahan arsitektur Melayu yang kental. Bangunan berwarna kuning cerah, ornamen-ornamen halus, dan atap bergaya Timur Tengah menciptakan suasana yang begitu megah. Aku menyelami sejarah keluarga kerajaan Deli yang terpatri di setiap ruangannya.</p>

    <p>Dari keindahan istana, aku melanjutkan perjalanan menuju Danau Toba, destinasi ikonik Sumatera Utara. Sampai di sana, aku disambut dengan panorama luar biasa yang memukau hati. Danau Toba yang luas dan tenang memberikan kedamaian yang tak tergantikan. Aku menikmati waktu di tepi danau, menikmati pemandangan pegunungan yang mengelilingi danau, serta berinteraksi dengan masyarakat lokal yang ramah.</p>

    <p>Tak jauh dari Danau Toba, aku mengunjungi Pulau Samosir. Pulau yang menakjubkan ini memberikan pengalaman unik dengan budaya Batak yang kaya dan tradisi khasnya. Aku menyaksikan pertunjukan tari-tarian dan musik tradisional Batak yang menggugah jiwa. Sementara itu, kelezatan makanan khas Batak seperti Babi Panggang Karo dan Arsik memanjakan lidahku.</p>

    <p>Tak bisa dilewatkan, aku juga mengeksplorasi berbagai tempat wisata menarik di sekitar Kota Medan. Aku mengunjungi Bukit Lawang untuk bertemu dengan orangutan liar, menjelajahi Gunung Sibayak dan Gunung Sinabung untuk petualangan hiking yang menantang, serta menyusuri Kebun Binatang Medan untuk melihat berbagai satwa langka.</p>

    <p>Di malam hari, Malioboro Street menjadi pusat perhatian. Aku menikmati keseruan menjelajahi toko-toko unik, mencicipi berbagai kuliner khas Medan seperti Mie Medan dan Soto Medan, serta menikmati seni jalanan yang menghibur. Aku juga menyempatkan diri untuk berbelanja oleh-oleh khas dari Medan seperti Bika Ambon dan Lapis Legit.</p>

    <p>Setelah beberapa hari petualangan yang luar biasa, tiba saatnya untuk kembali pulang. Namun, kenangan indah di Kota Medan tak akan pernah terlupakan. Aku meninggalkan kota ini dengan hati yang penuh dengan cerita petualangan, keindahan alam, dan senyum dari warga yang ramah. Medan benar-benar telah mencuri hatiku, dan aku tahu, suatu hari nanti, aku akan kembali untuk menyelami pesonanya yang menggoda.</p>
                ',
                'tags' => json_encode(['tag3', 'tag4']),
                'category' => 'Posting',
                'user_id' => $users->random()->id,
                'room_id' => $rooms->random()->id,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'title' => 'Tempat Wisata di Surabaya',
                'slug' => 'postq11aa1-2',
                'body' => '

    <h2>1. Monumen Kapal Selam (Monkasel)</h2>
    <p>Monumen Kapal Selam adalah sebuah wahana wisata yang menarik di Surabaya. Terletak di Taman Bungkul, monumen ini adalah kapal selam asli yang pernah digunakan oleh Angkatan Laut Indonesia. Pengunjung dapat masuk ke dalam kapal selam dan menjelajahi bagian dalamnya yang menarik.</p>

    <h2>2. Taman Bungkul</h2>
    <p>Taman Bungkul adalah taman kota yang populer di Surabaya. Tempat ini sering dijadikan tempat bersantai bagi warga setempat. Di taman ini, pengunjung dapat menemukan berbagai fasilitas olahraga, area bermain untuk anak-anak, dan tempat-tempat makan yang menyajikan kuliner khas Surabaya.</p>

    <h2>3. House of Sampoerna</h2>
    <p>House of Sampoerna adalah museum dan pabrik rokok yang menjadi salah satu objek wisata menarik di Surabaya. Pengunjung dapat menyaksikan proses pembuatan rokok dan melihat koleksi sejarah perusahaan Sampoerna. Selain itu, museum ini juga menawarkan galeri seni dan area berbelanja.</p>

    <h2>4. Taman Safari Surabaya</h2>
    <p>Taman Safari Surabaya adalah kebun binatang modern yang menawarkan pengalaman berinteraksi dengan satwa liar. Pengunjung dapat melihat berbagai hewan dari berbagai belahan dunia, seperti harimau, jerapah, singa, dan lain-lain. Selain itu, taman safari ini juga memiliki wahana permainan yang menyenangkan untuk keluarga.</p>

    <h2>5. Ciputra Waterpark</h2>
    <p>Ciputra Waterpark adalah taman air terbesar di Surabaya yang cocok untuk berlibur bersama keluarga. Taman air ini menawarkan berbagai perosotan air, kolam renang, dan wahana seru lainnya. Pengunjung dapat menikmati bermain air dan bersantai di lingkungan yang menyenangkan.</p>

    <h2>6. Masjid Cheng Hoo</h2>
    <p>Masjid Cheng Hoo adalah masjid dengan arsitektur khas Tionghoa yang menarik. Masjid ini menjadi salah satu simbol toleransi agama di Surabaya. Dengan atap berwarna-warni dan ornamen khas Tionghoa, masjid ini menawarkan pemandangan yang indah dan mengagumkan.</p>

    <h2>7. Jembatan Suramadu</h2>
    <p>Jembatan Suramadu adalah jembatan yang menghubungkan Surabaya dengan Pulau Madura. Jembatan ini adalah jembatan terpanjang di Indonesia dan menawarkan pemandangan spektakuler, terutama saat matahari terbenam. Pengunjung dapat berjalan-jalan atau bersepeda di jalur pejalan kaki di atas jembatan untuk menikmati pemandangan.</p>

    <p>Surabaya memiliki banyak tempat wisata menarik lainnya, seperti Museum Mpu Tantular, Taman Flora Bratang, Suroboyo Carnival Night Market, dan masih banyak lagi. Jadi, jika Anda berencana mengunjungi Surabaya, pastikan untuk mengalokasikan waktu untuk menjelajahi berbagai tempat menarik di kota ini.</p>
                ',
                'tags' => json_encode(['tag3', 'tag4']),
                'category' => 'Posting',
                'user_id' => $users->random()->id,
                'room_id' => $rooms->random()->id,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Uuid::uuid4(),
                'title' => 'Menyusuri Sejarah dan Keindahan Monas',
                'slug' => 'aasdpostq11aa1-2',
                'body' => '

    <p>Hari itu, saya berkesempatan mengunjungi salah satu ikon paling megah di Ibu Kota, yaitu Monumen Nasional atau yang lebih akrab disebut Monas. Berdiri dengan megahnya di tengah-tengah kota Jakarta, Monas telah menjadi saksi bisu sejarah dan menyimpan pesona yang tak terlupakan.</p>

    <p>Pagi itu, langit cerah dan sinar matahari menyinari kota metropolitan ini dengan hangatnya. Saat memasuki kompleks Monas, saya disambut oleh rimbunnya pohon-pohon hijau yang memberikan kesan alami di tengah keramaian kota. Jalan setapak yang teratur mengajak saya untuk menyusuri area sekitar Monas yang luas.</p>

    <p>Saya memutuskan untuk menaiki lift menuju puncak Monas untuk menikmati panorama kota Jakarta dari ketinggian. Setelah beberapa detik menaiki lift, pemandangan spektakuler mulai terlihat ketika pintu lift terbuka. Di atas, terbentang pemandangan megah dari gedung-gedung pencakar langit yang menjulang tinggi. Semakin tinggi saya berada, semakin jelas saya menyaksikan kebesaran kota ini.</p>

    <p>Sambil menikmati pemandangan, saya berkeliling di area puncak Monas yang terbuka dan luas. Di tengahnya, terdapat lambang Garuda Pancasila yang megah dengan sepasang sayapnya yang mencuat ke atas, menggambarkan semangat kebangsaan Indonesia. Merenung di bawah Garuda tersebut, saya merasakan semangat dan kebanggaan menjadi bagian dari bangsa ini.</p>

    <p>Setelah turun dari puncak Monas, saya melanjutkan petualangan di sekitar kompleks Monas. Tepat di depan monumen, terdapat Lapangan Merdeka yang luas, tempat orang-orang berkumpul untuk bersantai dan menikmati suasana sore. Beberapa kelompok pelajar nampak bersemangat mengenakan seragam sekolahnya, sedang menikmati pemandangan dan berfoto bersama.</p>

    <p>Tak jauh dari Lapangan Merdeka, saya menemukan Museum Nasional yang menawarkan perjalanan waktu ke masa lampau. Di dalamnya, tersimpan beragam koleksi artefak sejarah, mulai dari zaman prasejarah hingga masa penjajahan Belanda. Melihat peninggalan sejarah ini, saya semakin merasa kagum akan kekayaan budaya Indonesia.</p>

    <p>Perjalanan hari itu masih belum lengkap jika saya belum mengelilingi taman di sekitar Monas. Taman dengan pepohonan rindang dan kolam-kolam kecil memberikan kesan tenang dan damai, seolah berfungsi sebagai oase hijau di tengah gemerlap kota. Saya menemukan beberapa keluarga dan anak-anak yang bermain riang di taman tersebut.</p>

    <p>Seiring matahari semakin condong ke barat, lampu-lampu Monas mulai menyala, menandakan keindahan malam yang akan datang. Saya memutuskan untuk tinggal sejenak dan menikmati keindahan Monas di malam hari. Lampu-lampu yang menerangi monumen tersebut memberikan nuansa yang magis dan memukau.</p>

    <p>Saat itulah, saya merasa seolah-olah terhubung dengan sejarah panjang Indonesia. Monas bukan sekadar simbol kebanggaan bangsa, tetapi juga saksi bisu perjalanan panjang Indonesia menuju kemerdekaan. Dari kejauhan, monumen ini mengajarkan kita untuk selalu menghargai dan menjaga keberagaman serta persatuan.</p>

    <p>Setelah menikmati pemandangan malam, langkahku kembali ke arah keluar kompleks Monas. Di perjalanan pulang, saya merasa terinspirasi dan penuh semangat. Monas telah memberikan banyak pengalaman berharga dan kenangan indah yang takkan terlupakan. Dan dari hari itu, saya merasa lebih bangga menjadi bagian dari Indonesia, negeri dengan sejuta pesona dan keindahan, yang tercermin dalam kebesaran Monumen Nasional.</p> ',
                'tags' => json_encode(['tag3', 'tag4']),
                'category' => 'Posting',
                'user_id' => $users->random()->id,
                'room_id' => $rooms->random()->id,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ];

        DB::table('posts')->insert($data);
    }
}
