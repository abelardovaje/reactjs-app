<?php

namespace App\Http\Controllers;
use Validator;
use Illuminate\Http\Request;
use App\Http\Requests;
use App;
use Hash;
class UserController extends Controller
{
    //

    public function index(){
    	return view('index');
    }

    public function login(Request $request){
        return response()->json($request->all());
    }

    public function register(Request $request){ 
        $data = $request->all();
        App\User::SignUp($data);
        return response()->json($request->all());
    }
}
