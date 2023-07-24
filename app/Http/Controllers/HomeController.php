<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Post;
use App\Models\Question;
use App\Models\Room;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {

        $seed = 11;
        $posts = Post::with(['image', 'user', 'room', 'votes', "comments"])
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


        $topQuestions = Question::get()
            ->take(5);

        $postsWithQuestions = $posts->map(function ($post) {
            $post['type'] = 'post';
            return $post;
        })->concat($answers->map(function ($answers) {
            $answers['type'] = 'answer';
            return $answers;
        }))->shuffle($seed);


//        return response()->json($this->paginate($postsWithQuestions, 5, $request->page));
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


    function paginate($items, $perPage = 5, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);

        $items = $items instanceof Collection ? $items : Collection::make($items);

        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }

    public function Following(Request $request)
    {

        $auth = Auth()->user();
        $following = $auth->following()->get();

        $posts = Post::with(['image', 'user', 'room', 'votes', "comments"])
            ->whereIn("user_id", $following->pluck("target_id"))
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

        $questions = Question::with(["user", "answers"])->whereIn("user_id", $following->pluck("target_id"))->get();
        $topQuestions = Question::get()
            ->take(5);


        $postsWithQuestions = $posts->map(function ($post) {
            $post['type'] = 'post';
            return $post;
        })->concat($questions->map(function ($question) {
            $question['type'] = 'question';
            return $question;
        }));


        $user = User::with("posts")->get();
        $rooms = Room::with('image', 'posts')->get();

        if ($request->wantsJson()) {
            return response()->json($posts);
        }
        return Inertia::render('Dashboard', [
            'postsWithQuestions' => $posts,
            'rooms' => $rooms,
            "topQuestions" => $topQuestions,
            "topUser" => $user

        ]);

    }
}
