<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AdminStoryController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\AdminTagController;

/*
Web Routes
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

/*
Guest auth
*/

Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/register', [AuthController::class, 'register']);

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

/*
Authenticated user
*/

Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('/settings/profile', [AuthController::class, 'profilePage'])->name('settings.profile.page');
    Route::post('/settings/profile', [AuthController::class, 'updateProfile'])->name('settings.profile');

    Route::get('/settings/account', [AuthController::class, 'accountPage'])->name('settings.account.page');
    Route::post('/settings/account', [AuthController::class, 'updateAccount'])->name('settings.account');

    Route::get('/settings/password', [AuthController::class, 'passwordPage'])->name('settings.password.page');
    Route::post('/settings/password', [AuthController::class, 'updatePassword'])->name('settings.password');

    Route::get('/settings/stories', [AuthController::class, 'storiesPage'])->name('settings.stories.page');

    Route::get('/stories/create', [StoryController::class, 'create'])->name('stories.create');
    Route::post('/stories', [StoryController::class, 'store'])->name('stories.store');
    Route::get('/stories/{story}/edit', [StoryController::class, 'edit'])->name('stories.edit');
    Route::post('/stories/{story}/update', [StoryController::class, 'update'])->name('stories.update');

    Route::post('/stories/{story}/donate', [DonationController::class, 'store'])->name('stories.donate');
    Route::post('/stories/{story}/like', [LikeController::class, 'store'])->name('stories.like');

    Route::get('/admin', [AdminDashboardController::class, 'index'])->name('admin.dashboard');

    Route::get('/admin/stories', [AdminStoryController::class, 'index'])->name('admin.stories');
    Route::post('/admin/stories/{story}/approve', [AdminStoryController::class, 'approve'])->name('admin.stories.approve');
    Route::post('/admin/stories/{story}/delete', [AdminStoryController::class, 'delete'])->name('admin.stories.delete');
    Route::post('/admin/stories/{story}/tags', [AdminStoryController::class, 'updateTags'])->name('admin.stories.tags');

    Route::get('/admin/users', [AdminUserController::class, 'index'])->name('admin.users');
    Route::post('/admin/users/{user}/story-limit', [AdminUserController::class, 'updateStoryLimit'])->name('admin.users.story-limit');

    Route::get('/admin/tags', [AdminTagController::class, 'index'])->name('admin.tags');
    Route::post('/admin/tags', [AdminTagController::class, 'store'])->name('admin.tags.store');
    Route::post('/admin/tags/{tag}/update', [AdminTagController::class, 'update'])->name('admin.tags.update');
    Route::post('/admin/tags/{tag}/delete', [AdminTagController::class, 'delete'])->name('admin.tags.delete');
});

/*
Public story page
*/

Route::get('/stories/{story}', [StoryController::class, 'show'])->name('stories.show');
