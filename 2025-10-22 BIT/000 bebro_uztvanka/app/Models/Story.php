<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    protected $fillable = [
        'user_id',
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
}
