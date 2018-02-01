<?php
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes that you want to expose
| as an api.
|
*/
$apiRoutesConfig = [
    'prefix' => 'api',
    'middleware'=>'test'
];

// Protected RESTful API routes
Route::group($apiRoutesConfig, function () {
   
    /* Please feel free to include routes that you want to expose as an API */
    Route::post('offline-user','RoomController@offLineUser');
   
});