<?php

namespace App\Http\Controllers;

use App\Models\Following;
use App\Models\Post;
use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): \Inertia\Response
    {
        $auth = Auth()->user();

        if (!uuid_is_valid($id)) {
            abort(404, "Question not found");
        }

        $user = User::find($id);


        if (!isset($user)) {
            abort(404, "Question not found");
        }

        $posts = Post::with(['image', 'user', 'room', 'votes', "comments"])->where("user_id", $id)->get();
        $questions = Question::with(["user", "answers"])->where("user_id", $id)->get();
        return Inertia::render('User/Detail', [
            'user' => $user,
            'isFollow' => $user->isFollow($auth->id),
            'posts' => $posts,
            "questions" => $questions,
            "FollowAndFollowingCount" => $user->followAndFollowingCount(),

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function storeFollowing(Request $request)
    {
        $userId = User::find($request->user_id)->exists();
        $targetId = User::find($request->target_id)->exists();

        if (!$userId || !$targetId) {
            abort(404, "User not found");
        }

        $isFollowing = Following::where("target_id", $request->target_id)->where("user_id", $request->user_id)->exists();

        if ($isFollowing) {
            $following = Following::where("target_id", $request->target_id)->where("user_id", $request->user_id)->delete();
        }

        if (!$isFollowing) {
            $following = Following::create($request->all());
        }


        return redirect()->back();
    }


}
