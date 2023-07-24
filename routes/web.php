<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuestionControler;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);

    return to_route("dashboard");
});


//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->name('dashboard');


Route::get('/home', [HomeController::class, 'index'])->middleware("auth")->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


});

Route::post('/store/image', [PostController::class, 'storeImage'])->name('post.image-store');
Route::post('/store/comment', [PostController::class, 'storeComment'])->name('post.comment-store');
Route::post('/store/reply/comment', [PostController::class, 'storeReplyComment'])->name('post.reply-comment-store');

Route::resource('question', QuestionControler::class)->middleware("auth");
Route::post("/store/vote", [QuestionControler::class, 'storeVote'])->name("question.vote-store");

Route::resource('answer', AnswerController::class)->middleware("auth");
Route::resource('posts', PostController::class)->middleware("auth");
Route::resource('room', RoomController::class)->middleware("auth");
Route::resource('destination', DestinationController::class)->middleware("auth");
Route::resource("users", UserController::class)->middleware("auth");
Route::post("/follow", [UserController::class, "storeFollowing"])->name("user.follow-store");


Route::get("/following", [HomeController::class, "following"])->name("following");


//Route::middleware('auth')->group(function () {
//    Route::get('/create', [PostController::class, 'create'])->name('post.create');
//});


require __DIR__ . '/auth.php';
