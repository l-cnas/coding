<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminStoryController;


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

Route::get('/admin/stories', [AdminStoryController::class, 'index'])->middleware('auth')->name('admin.stories');
Route::post('/admin/stories/{story}/approve', [AdminStoryController::class, 'approve'])->middleware('auth')->name('admin.stories.approve');
Route::post('/admin/stories/{story}/delete', [AdminStoryController::class, 'delete'])->middleware('auth')->name('admin.stories.delete');
