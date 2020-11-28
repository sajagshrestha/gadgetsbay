<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;

use App\Notification;
use App\User;
use App\UserFromBearerToken;
use Illuminate\Http\Request;

class CommentController extends ResponseController
{
    public function store(CommentRequest $request)
    {
        if($request->bearerToken())
        {
            $comment = new Comment();
            $comment->comment = $request->comment;
            $comment->ad_id = $request->ad_id;

            $userFromToken = new UserFromBearerToken();
            $user = $userFromToken->getUser($request);
            if(!isset($user->id)) {
                return $this->responseUnprocessable([
                    'error' => 'user not found'
                ]);
            }
            $comment->user_id = $user->id;
            if ($request->reply_id) {
                $parentComment = Comment::find($request->reply_id);
                if ($parentComment->reply_id !== null) {
                    $parentComment = Comment::find($parentComment->reply_id);
                }
                $comment->reply_id = $parentComment->id;
                $parentComment->replies_count++;
                $parentComment->save();
            }
            if ($comment->reply_id)
                $this->addNotificationReply($comment);
            else
                $this->addNotificationComment($comment);
            $comment->save();
            return new CommentResource($comment);
        }
        else
            return $this->responseUnauthorized();

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

    private function addNotificationComment(Comment $comment)
    {
        $user = $comment->user;
        $ad = $comment->ad;
        if($user->id != $ad->user_id) {
            $notification = new Notification();
            $notification->body = $user->name . " has commented on your post";

            $notification->ad_id = $ad->id;
            $adUser = $ad->user;
            $notification->user_id = $adUser->id;

            $adUser->notification++;

            if (!($adUser->save() && $notification->save()))
                return $this->responseUnprocessable(['error' => 'error processing your last request']);
        }

    }
    private function addNotificationReply(Comment $comment)
    {
        $user = $comment->user;
        $ad = $comment->ad;
        $parentComment = Comment::find($comment->reply_id);

        if($user->id != $parentComment->user_id)
        {
            $notification = new Notification();
            $notification->body = $user->name . " has replied to your comment";

            $notification->ad_id = $ad->id;
            $adUser = $ad->user;
            $notification->user_id = $adUser->id;
            $adUser->notification++;
            if (!($adUser->save() && $notification->save()))
                return $this->responseUnprocessable(['error' => 'error processing your last request']);
        }
    }



}
