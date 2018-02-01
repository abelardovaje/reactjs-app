<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Auth;
use Hash;
use App;
class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];
    protected $table = 'users';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function _login($data){
        if(Auth::attempt(['name'=>$data['name'],'password'=>$data['password']])){
            return auth()->user();
        }else{
            return;
        } 
    }

    public function scopeLogin($query,$data){

        return $this->_login($data);        

    }

    public function scopeSignUp($query,$data){
        $query->insert([
            'name'=>$data['name'],
            'email'=>($data['email'] == '') ? null:$data['email'],
            'password'=>Hash::make($data['password']),
            // 'gender'=>$data['value']
        ]); 
      
        return $this->_login($data);      
    }

     public function scopeAcceptFriend($query,$data){
        //Remove request
        //add to friend

        App\Contact_request::RemoveRequest($data);
        App\Contact::AddContact($data);
        return $data;
    }   
}
