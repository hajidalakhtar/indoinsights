<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory, hasUUIDs;

    protected $fillable = [
        'user_id',
        'question_id',
        'answer',
    ];


    function user()
    {
        return $this->hasOne(User::class, 'id', "user_id");
    }

    function question()
    {
        return $this->hasOne(Question::class, 'id', "question_id");
    }

    public function replies()
    {
        return $this->hasMany(Comment::class, 'comment_id', 'id');
    }

}
