<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use App\Models\Room;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response
    {
        $rooms = Room::all()->map(function ($room) {
            return [
                "value" => $room->id,
                "label" => $room->name,
            ];
        });
        return Inertia::render('Post/Create', ['csrf_token' => csrf_token(), "rooms" => $rooms]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            "title" => "required",
            "category" => "required",
            "room_id" => "required",
        ]);


        $post = null;
	if ($request->category == "Image") {
		//dd($request->file('postImage'));    
	
	    $imagePath = $request->file('postImage')->store('uploads');
	   // dd($imagePath);
	    $imageUrl = URL::asset('storage') . "/uploads/" . basename($imagePath);
            $post = Post::create([
                "room_id" => $request->room_id,
                "title" => $request->title,
                "category" => $request->category,
                "user_id" => auth()->user()->id,
                "tags" => json_encode(["tess", "tessss"]),
                "image_url" => $imageUrl
            ]);
	}


        if ($request->category == "Posting") {
            $requestData = $request->all();
            $tags = explode("#", $requestData["tags"]);
            array_shift($tags);
            $requestData["tags"] = json_encode($tags);

            $post = Post::create(array_merge($requestData, ["user_id" => auth()->user()->id]));
        }

        return redirect()->route('posts.show', ['post' => $post->id]);
    }


    /**lo
     * Display the specified resource.
     */
    public function show(string $id): \Inertia\Response
    {

        $post = Post::with('image')->with("user")->with("room")->find($id);
        $comments = Comment::where("post_id", $id)->whereNull("comment_id")->with('user')->with("replies")->with("replies.user")->latest()->get();


        $topRoomPost = Post::with('image')->with("user")->with("room")->take(5)->get();

        return Inertia::render('Post/Detail', [
            'postData' => $post,
            'comments' => $comments,
            'topRoomPost' => $topRoomPost,
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

    /**
     * Store a image
     */

    public function storeImage(Request $request): JsonResponse
    {
        if ($request->hasFile('files')) {    

		$originName = $request->file('files')->getClientOriginalName();
            $fileName = pathinfo($originName, PATHINFO_FILENAME);
            $extension = $request->file('files')->getClientOriginalExtension();
            $fileName = $fileName . '_' . time() . '.' . $extension;
            $request->file('files')->move(public_path('media'), $fileName);
            $url = asset('media/' . $fileName);
            return response()->json(['fileName' => $fileName, 'uploaded' => 1, 'url' => $url]);
        }
        return response()->json(['fileName' => "", 'uploaded' => 1, 'url' => ""]);
    }

    public function storeComment(Request $request): RedirectResponse
    {
        $comment = Comment::create($request->all());
        return redirect()->back();
//        return to_route('posts.show', ['post' => $comment->post_id]);
    }

    public function storeReplyComment(Request $request): RedirectResponse
    {
        $comment = Comment::create($request->all());
        return redirect()->back();
//        return redirect()->route('posts.show', ['post' => $comment->post_id]);
    }


}
