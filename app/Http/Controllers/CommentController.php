<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;
<<<<<<< HEAD
use App\UserFromBearerToken;
=======
>>>>>>> added comment api and other small fixes
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(CommentRequest $request)
    {
        $comment = new Comment();
        $comment->comment = $request->comment;
        $comment->ad_id = $request->ad_id;
<<<<<<< HEAD

        $userFromToken = new UserFromBearerToken();
        $comment->user_id = $userFromToken->getUserId($request->bearerToken());
        if($request->reply_id)
            $comment->reply_id= $request->reply_id;
        $comment->save();
        return new CommentResource($comment);
=======
        $comment->user_id = $request->user_id;
        if($request->reply_id)
            $comment->reply_id= $request->reply_id;
        $comment->save();
        return $comment;
>>>>>>> added comment api and other small fixes
    }

    public function show($ad_id)
    {
<<<<<<< HEAD

        $comments = Comment::where('ad_id',$ad_id)->where('reply_id',null)->orderBy('created_at','desc')->get();
=======
        $comments = Comment::where('ad_id',$ad_id)->get();
>>>>>>> added comment api and other small fixes

        return  CommentResource::collection($comments);

    }
<<<<<<< HEAD

    public function replies($comment_id)
    {
        $replyComment = Comment::where('reply_id',$comment_id)->orderBy('created_at')->get();

        return  CommentResource::collection($replyComment);
    }
=======
>>>>>>> added comment api and other small fixes
}
