<?php

namespace App\Http\Middleware;

use Closure;

class test
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {   


        $data = $request->all();

        if(!empty($data)){
           
            if($data['token'] != '1234'){
               return response('Unauthorized.', 401);
            }

        }else{
           
            return response('Unauthorized.', 401);
        }

        return $next($request);
    }
}
