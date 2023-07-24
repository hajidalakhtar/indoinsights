<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\DB;

class Question extends Model
{
    use HasFactory, hasUUIDs;

    protected $fillable = [
        'title',
        'description',
        'question',
        'tags',
        'location',
        'user_id',
        'room_id',
    ];

    function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', "user_id");
    }

    function answers()
    {
        return $this->hasMany(Answer::class, 'question_id', 'id');
    }

    function votes()
    {
        return $this->hasMany(Vote::class, 'target_id', 'id');

    }



}
