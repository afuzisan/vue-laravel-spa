<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailSendController;

Route::get('/', fn() => view('app'))->name('app');

Route::get('/reset-password/{token}', fn() => view('app'))
    ->middleware(['guest:' . config('fortify.guard')])
    ->name('password.reset');

Route::get('{any}', fn() => view('app'))->where('any', '^((?!api).)*');
Route::get('/mail', [MailSendController::class, 'send']);
