<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Post;
use App\Models\Question;
use App\Models\Room;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $room = Room::with('image')->get();
        return $room;


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
    public function show(Request $request, string $id): \Inertia\Response
    {


        if (uuid_is_valid($id) === false) {
            abort(404);
        }


        $seed = 11;
//        $posts = Post::with(['image', 'user', 'room', 'votes', "comments"])
//            ->where('room_id', $id)
//            ->latest()
//            ->get()->map(function ($item) {
//                $vote_count = $item->votes->groupBy('vote_type')->map(function ($votes, $vote_type) {
//                    $count = $votes->count();
//                    if ($vote_type === 'upvote') {
//                        return $count;
//                    } elseif ($vote_type === 'downvote') {
//                        return -$count;
//                    } else {
//                        return 0;
//                    }
//                })->sum();
//                $item->vote_count = $vote_count;
//                $userVote = $item->votes->where('user_id', Auth::id())->first();
//                if ($userVote) {
//                    $item->user_vote = $userVote->vote_type;
//                } else {
//                    $item->user_vote = null;
//                }
//
//                return $item;
//            });


        $posts = Post::with(['image', 'user', 'room', 'votes', "comments"])
            ->where('room_id', $id)
            ->latest()
            ->paginate(5);
        $posts->getCollection()->transform(function ($item) {
            $vote_count = $item->votes->groupBy('vote_type')->map(function ($votes, $vote_type) {
                $count = $votes->count();
                if ($vote_type === 'upvote') {
                    return $count;
                } elseif ($vote_type === 'downvote') {
                    return -$count;
                } else {
                    return 0;
                }
            })->sum();

            $item->vote_count = $vote_count;
            $userVote = $item->votes->where('user_id', Auth::id())->first();
            if ($userVote) {
                $item->user_vote = $userVote->vote_type;
            } else {
                $item->user_vote = null;
            }

            $item->type = 'post';

            return $item;
        });


        $answers = Answer::with("user")
            ->with("question")
            ->latest()
            ->take(2)
            ->get();


        $topQuestions = Question::where("room_id", $id)
            ->get()
            ->take(5);

        $postsWithQuestions = $posts->map(function ($post) {
            $post['type'] = 'post';
            return $post;
        })->concat($answers->map(function ($answers) {
            $answers['type'] = 'answer';
            return $answers;
        }))->shuffle($seed);

        if ($request->wantsJson()) {
            return response()->json($posts);
        }


        $user = User::with("posts")->get();
        $rooms = Room::with('image', 'posts')->get();


        return Inertia::render('Dashboard', [
            'postsWithQuestions' => $posts,
            'rooms' => $rooms,
            "topQuestions" => $topQuestions,
            "topUser" => $user
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
}
