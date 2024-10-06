<?php

namespace App\Http\Controllers;

use App\Mail\SendTestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use GuzzleHttp\Client;

class MailSendController extends Controller
{
    public function send()
    {
        $client = new Client();
        $response = $client->post(env('MAILTRAP_HOST') . '/api/v1/inboxes/' . env('MAILTRAP_INBOX_ID') . '/messages', [
            'headers' => [
                'Authorization' => 'Bearer ' . env('MAILTRAP_API_KEY'),
                'Content-Type' => 'application/json',
            ],
            'json' => [
                'from' => [
                    'email' => 'from@example.com',
                    'name' => 'Example Sender'
                ],
                'to' => [
                    [
                        'email' => 'to@example.com',
                        'name' => 'Example Receiver'
                    ]
                ],
                'subject' => 'Test Email',
                'text' => 'This is a test email sent using Mailtrap API.',
            ],
        ]);

        return "Email sent successfully via Mailtrap API!";
    }
}
