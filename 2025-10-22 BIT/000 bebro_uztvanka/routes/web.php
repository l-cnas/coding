<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminStoryController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\DonationController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('pages.index');
// });

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/register', [AuthController::class, 'register']);

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/settings', [AuthController::class, 'settings'])->middleware('auth')->name('settings');
Route::post('/settings', [AuthController::class, 'updateSettings'])->middleware('auth');

Route::get('/stories/create', [StoryController::class, 'create'])->middleware('auth')->name('stories.create');
Route::post('/stories', [StoryController::class, 'store'])->middleware('auth')->name('stories.store');
Route::get('/stories/{story}', [StoryController::class, 'show'])->name('stories.show');
Route::get('/stories/{story}/edit', [StoryController::class, 'edit'])
    ->middleware('auth')
    ->name('stories.edit');

Route::post('/stories/{story}/update', [StoryController::class, 'update'])
    ->middleware('auth')
    ->name('stories.update');

Route::post('/stories/{story}/donate', [DonationController::class, 'store'])
    ->middleware('auth')
    ->name('stories.donate');

Route::get('/admin/stories', [AdminStoryController::class, 'index'])->middleware('auth')->name('admin.stories');
Route::post('/admin/stories/{story}/approve', [AdminStoryController::class, 'approve'])->middleware('auth')->name('admin.stories.approve');
Route::post('/admin/stories/{story}/delete', [AdminStoryController::class, 'delete'])->middleware('auth')->name('admin.stories.delete');
Route::post('/admin/stories/{story}/tags', [AdminStoryController::class, 'updateTags'])
    ->middleware('auth')
    ->name('admin.stories.tags');

Route::get('/admin/users', [AdminUserController::class, 'index'])->middleware('auth')->name('admin.users');
Route::post('/admin/users/{user}/story-limit', [AdminUserController::class, 'updateStoryLimit'])->middleware('auth')->name('admin.users.story-limit');

Route::get('/admin', [AdminDashboardController::class, 'index'])->middleware('auth')->name('admin.dashboard');
