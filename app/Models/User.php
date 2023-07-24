<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, hasUUIDs;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    public function isFollow($userId): bool
    {
        return Following::where("target_id", $this->id)->where("user_id", $userId)->exists();
    }

    public function following(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Following::class, "user_id", "id");
    }


    public function FollowAndFollowingCount(): array
    {
        $follow = Following::where("target_id", $this->id)->count();
        $following = Following::where("user_id", $this->id)->count();
        return compact("follow", "following");
    }

    public function posts()
    {
        return $this->hasMany(Post::class, "user_id");
    }

}
