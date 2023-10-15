<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    public function pressContact(Request $request)
    {
        try {
            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'subject' => $request->subject,
                'message' => $request->message,
                'is_press' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ];

            DB::table('contact_message')->insert($data);
            return $this->sendSuccess(['result' => true], 'report saved');
        } catch (\Throwable $th) {
            return $this->sendError('Error report saved', $th);
        }
    }

    public function contact(Request $request)
    {
        try {
            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'subject' => $request->subject,
                'message' => $request->message,
                'is_press' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ];

            DB::table('contact_message')->insert($data);
            return $this->sendSuccess(['result' => true], 'report saved');
        } catch (\Throwable $th) {
            return $this->sendError('Error report saved', $th);
        }
    }

    public function bug(Request $request)
    {
        try {
            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'link' => $request->link,
                'bug' => $request->bug,
                'created_at' => now(),
                'updated_at' => now(),
            ];

            DB::table('bug_report')->insert($data);
            return $this->sendSuccess(['result' => true], 'report saved');
        } catch (\Throwable $th) {
            return $this->sendError('Error report saved', $th);
        }
    }

    public function complaint(Request $request)
    {
        try {
            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'link' => $request->link,
                'complaint' => $request->complaint,
                'created_at' => now(),
                'updated_at' => now(),
            ];

            DB::table('complaint_report')->insert($data);
            return $this->sendSuccess(['result' => true], 'report saved');
        } catch (\Throwable $th) {
            return $this->sendError('Error report saved', $th);
        }
    }
}
