<?php

use App\Http\Controllers\Api\V1\User\MeController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')
    ->namespace('\App\Http\Controllers\Api\V1')
    ->middleware(['auth:sanctum', 'verified'])
    ->group(function () {
        Route::get('/me', MeController::class);
    });


//返ってくる
Route::get('/test2', [\App\Http\Controllers\TestController::class, 'index']);


//これは返ってくる
Route::get('/test', function (Request $request) {
    return response()->json([
        'message' => 'This is a JSON response',
    ]);
});


//ポストリクエストのテスト
Route::post('test3', [\App\Http\Controllers\TestController::class, 'postTest']);

// PUTリクエストで '/test4' にアクセスすると、TestControllerのupdateメソッドが呼び出されます。
Route::put('/test4', [\App\Http\Controllers\TestController::class, 'update']);
