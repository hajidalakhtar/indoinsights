<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Post extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        "id",
        "title",
        "slug",
        "body",
        "tags",
        "category",
        "image_url",
        "video_url",
        "user_id",
        "room_id",
        "is_published"
    ];


    public function image(): hasMany
    {
        return $this->hasMany(Image::class, 'target_id');
    }

    function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', "user_id");
    }

    public function room(): HasOne
    {
        return $this->hasOne(Room::class, 'id', "room_id");

    }

    function votes()
    {
        return $this->hasMany(Vote::class, 'target_id', 'id');

    }


    function comments()
    {
        return $this->hasMany(Comment::class, 'post_id', 'id');
    }





}
