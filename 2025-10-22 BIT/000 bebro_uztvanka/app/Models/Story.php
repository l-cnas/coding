<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'content',
        'goal_amount',
        'main_image',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function images()
    {
        return $this->hasMany(StoryImage::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function donations()
    {
        return $this->hasMany(Donation::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
