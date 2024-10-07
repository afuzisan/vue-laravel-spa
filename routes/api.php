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


Route::get('/test2', [\App\Http\Controllers\TestController::class, 'index']);


//これは返ってくる
Route::get('/test', function (Request $request) {
    return response()->json([
        'message' => 'This is a JSON response',
    ]);
});
