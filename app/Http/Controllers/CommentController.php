<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;
use App\UserFromBearerToken;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(CommentRequest $request)
    {
        $comment = new Comment();
        $comment->comment = $request->comment;
        $comment->ad_id = $request->ad_id;

        $userFromToken = new UserFromBearerToken();
        $comment->user_id = $userFromToken->getUserId($request->bearerToken());
        if($request->reply_id)
            $comment->reply_id= $request->reply_id;
        $comment->save();
        return new CommentResource($comment);
    }

    public function show($ad_id)
    {

        $comments = Comment::where('ad_id',$ad_id)->where('reply_id',null)->orderBy('created_at','desc')->get();

        return  CommentResource::collection($comments);

    }

    public function replies($comment_id)
    {
        $replyComment = Comment::where('reply_id',$comment_id)->orderBy('created_at')->get();

        return  CommentResource::collection($replyComment);
    }
}
