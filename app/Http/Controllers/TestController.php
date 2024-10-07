<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index(Request $request)
    {
        return response()->json([
            'message' => 'Hello, world!'
        ]);
    }

    public function postTest(Request $request)
    {
        // リクエストから'name'パラメータを取得
        $name = $request->input('name');

        // JSON形式でレスポンスを返す
        return response()->json([
            'message' => 'Hello, ' . $name . '!'
        ]);
    }
}
