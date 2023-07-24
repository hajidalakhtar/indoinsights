<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory,HasUuids;
    protected $primaryKey = 'id';
    public $incrementing = false;

//    private $incrementing = false;




//    public function rooms()
//    {
//        return $this->belongsTo(Room::class, 'target_id');
//    }

}
