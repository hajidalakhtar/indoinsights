<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Room extends Model
{
    use HasFactory, HasUuids;


    public function image():hasMany
    {
        return $this->hasMany(Image::class, 'target_id');
    }

    public function posts(){
        return $this->hasMany(Post::class,"room_id");
    }
}
