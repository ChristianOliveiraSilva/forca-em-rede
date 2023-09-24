<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\Participant;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function index()
    {
        try {
            $events = Event::all();

            return $this->sendSuccess($events, 'Events retrieved');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving events', $th);
        }
    }

    public function store(Request $request)
    {
        try {
            $event = new Event();
            $event->title = $request->title;
            $event->description = $request->description;
            $event->start_date = $request->start_date;
            $event->end_date = $request->end_date;
            $event->user_id = Auth::id();
            $event->save();

            return $this->sendSuccess($event, 'Event created', 201);
        } catch (\Throwable $th) {
            return $this->sendError('Error creating event', $th);
        }
    }

    public function show(Event $event)
    {
        try {
            return $this->sendSuccess($event, 'Event retrieved');
        } catch (\Throwable $th) {
            return $this->sendError('Error retrieving event', $th);
        }
    }

    public function update(Request $request, Event $event)
    {
        try {
            $event->title = $request->title;
            $event->description = $request->description;
            $event->start_date = $request->start_date;
            $event->end_date = $request->end_date;
            $event->save();

            return $this->sendSuccess($event, 'Event updated');
        } catch (\Throwable $th) {
            return $this->sendError('Error updating event', $th);
        }
    }

    public function destroy(Event $event)
    {
        try {
            return $this->sendSuccess(['result' => $event->delete()], 'Event deleted');
        } catch (\Throwable $th) {
            return $this->sendError('Error deleting event', $th);
        }
    }

    public function participate(Event $event)
    {
        try {
            $participant = new Participant;
            $participant->user_id = Auth::id();
            $participant->event_id = $event->id;
            $participant->save();

            return $this->sendSuccess(['result' => true], 'confirmed participation');
        } catch (\Throwable $th) {
            return $this->sendError('Error to confirm participation', $th);
        }
    }
}