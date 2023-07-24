<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('slug')->unique()->nullable();
            $table->text('body')->nullable();
            $table->json('tags')->nullable(); // Penjelasan: Kolom ini menyimpan tag-tag terkait
            $table->string('category'); // Penjelasan: Kategori dari entitas
            $table->string('image_url')->comment("untuk category images")->nullable(); // Penjelasan: Kategori dari entitas
            $table->string('video_url')->comment("untuk category video")->nullable(); // Penjelasan: Kategori dari entitas
            $table->foreignUuid('user_id');
            $table->foreignUuid('room_id');
            $table->boolean('is_published')->default(true); // Penjelasan: Indikator apakah konten sudah dipublikasikan atau belum
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
