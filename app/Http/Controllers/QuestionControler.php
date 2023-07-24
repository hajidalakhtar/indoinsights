<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Room;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class QuestionControler extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response
    {
        $questions = Question::with(["user", "answers", "votes"])->get()->map(function ($item) {
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

            // Periksa apakah pengguna yang sedang login sudah melakukan vote pada pertanyaan ini
            $userVote = $item->votes->where('user_id', Auth::id())->first();
            if ($userVote) {
                $item->user_vote = $userVote->vote_type;
            } else {
                $item->user_vote = null;
            }

            return $item;
        });
        $rooms = Room::with('image')->get();
        return Inertia::render('Question/Index', [
            'questions' => $questions,
            'rooms' => $rooms
        ]);


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

        $question = Question::create(array_merge($request->all(), ['tags' => '["Tes","Pas"]', "location" => "OKEY"]));
        return to_route('question.show', ['question' => $question->id]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): \Inertia\Response
    {
        if (!uuid_is_valid($id)) {
            abort(404, "Question not found");

        }

        $question = Question::with(["user", "answers.replies.user" => function ($query) {

            return $query->orderBy('created_at', 'DESC');
        }, "answers.user"])->find($id);

        if (!isset($question)) {
            abort(404, "Question not found");
        }


        return Inertia::render('Question/Detail', [
            'question' => $question
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


//    public function storeAnswer(Request $request)
//    {
//        $answer = Answer::create($request->all());
//        return redirect()->back();
//
//    }

    public function storeVote(Request $request)
    {

        $userId = auth()->user()->id;
        $vote = Vote::where('user_id', $userId)
            ->where('target_id', $request->target_id)
            ->first();


        if ($vote) {
            if ($vote->vote_type === $request->vote_type) {

                $vote->delete();
            } else {
                $vote->vote_type = $request->vote_type;
                $vote->save();
            }
        } else {
            Vote::create([
                'user_id' => $userId,
                'target_id' => $request->target_id,
                'vote_type' => $request->vote_type
            ]);
        }

        return redirect()->back();

    }
}
