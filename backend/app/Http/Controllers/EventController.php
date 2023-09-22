<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    public function index()
    {
        try {
            $events = Event::all();

            return sendSuccess($events, 'Events retrieved', 200);
        } catch (\Throwable $th) {
            return sendError('Error retrieving events', $th);
        }
    }

    public function store(Request $request)
    {
        try {
            $event = new Event();
            $event->title = $request->title;
            $event->description = $request->description;
            // Você pode adicionar mais campos conforme necessário.
            $event->save();

            return sendSuccess($event, 'Event created', 201);
        } catch (\Throwable $th) {
            return sendError('Error creating event', $th);
        }
    }

    public function show($id)
    {
        try {
            $event = Event::find($id);

            if (!$event) {
                return sendError('Event not found', null, 404);
            }

            return sendSuccess($event, 'Event retrieved', 200);
        } catch (\Throwable $th) {
            return sendError('Error retrieving event', $th);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $event = Event::find($id);

            if (!$event) {
                return sendError('Event not found', null, 404);
            }

            $event->title = $request->title;
            $event->description = $request->description;
            // Atualize outros campos conforme necessário.
            $event->save();

            return sendSuccess($event, 'Event updated', 200);
        } catch (\Throwable $th) {
            return sendError('Error updating event', $th);
        }
    }

    public function destroy($id)
    {
        try {
            $event = Event::find($id);

            if (!$event) {
                return sendError('Event not found', null, 404);
            }

            $event->delete();

            return sendSuccess(null, 'Event deleted', 200);
        } catch (\Throwable $th) {
            return sendError('Error deleting event', $th);
        }
    }
}