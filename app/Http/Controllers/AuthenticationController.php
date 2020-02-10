<?php

namespace App\Http\Controllers;

use http\Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
//use Illuminate\Contracts\Validation\Validator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthenticationController extends ResponseController
{

    /**
     * login api
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $input = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!auth()->attempt($input)) {
            return $this->responseUnauthorized();
        }
        $user = auth()->user();
        $token = auth()->user()->createToken('authToken')->accessToken;
        return response()->json([
            'status' => 200,
            'message' => 'Authorized.',
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => [
                'id' => $user->id,
                'name' => $user->name
            ]
        ], 200);

    }

    /**
     * Register api
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }

        try {
            $user = $this->create($request->all());
            return $this->responseSuccess('Registered successfully.');
        } catch (Exception $e) {
            return $this->responseServerError('Registration error.');
        }
    }

    /**
     * Register api
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
//        $value = $request->bearerToken();
//        $id = (new Parser())->paese(value)->getHeader('jti');
//        $token = $request->user()->tokens->find($id);
//        $token->revoke();

        auth()->user()->token()->revoke();

        return $this->responseSuccess('Logged Out successfully');

    }


    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }


}
