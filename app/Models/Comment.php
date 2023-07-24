<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Comment extends Model
{
    use HasFactory, hasUuids;

    protected $fillable = [
        'id',
        'user_id',
        'post_id',
        'comment_id',
        'content',
    ];


    function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', "user_id");
    }


    public function replies()
    {
        return $this->hasMany(Comment::class, 'comment_id');
    }

}
