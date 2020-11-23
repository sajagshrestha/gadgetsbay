<?php

namespace App;


use Illuminate\Support\Facades\App;
use \League\OAuth2\Server\ResourceServer;
use \Laravel\Passport\TokenRepository;
use \Laravel\Passport\Guards\TokenGuard;
use \Laravel\Passport\ClientRepository;
use \Illuminate\Support\Facades\Auth;
use \Illuminate\Http\Request;

class UserFromBearerToken
{
function getUserId($bearerToken) {
  $tokenguard = new TokenGuard(
    App::make(ResourceServer::class),
    Auth::createUserProvider('users'),
    App::make(TokenRepository::class),
    App::make(ClientRepository::class),
    App::make('encrypter')
  );
  $request = Request::create('/');
  $request->headers->set('Authorization', 'Bearer ' . $bearerToken);
  return $tokenguard->user($request)->id;
}
}
