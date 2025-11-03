'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, Users, Video, MapPin, Bell, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarPage() {
  const today = new Date();
  const currentMonth = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Mock upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Closing: Wilson Property',
      time: '2:00 PM',
      date: 'Nov 5, 2025',
      type: 'closing',
      location: 'Title Company Office',
      attendees: ['Sarah Chen', 'James Wilson', 'Title Officer']
    },
    {
      id: 2,
      title: 'Call: Martinez Environmental Follow-up',
      time: '10:30 AM',
      date: 'Nov 4, 2025',
      type: 'call',
      attendees: ['Sarah Chen', 'Environmental Consultant']
    },
    {
      id: 3,
      title: 'Team Meeting: Weekly Pipeline Review',
      time: '9:00 AM',
      date: 'Nov 6, 2025',
      type: 'meeting',
      location: 'Conference Room A',
      attendees: ['Processing Team', 'Operations Manager']
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Calendar</h1>
        <p className="text-text-secondary">
          Track closings, calls, meetings, and deadlines
        </p>
      </div>

      {/* Feature Explanation Card */}
      <Card className="p-6 mb-6 bg-bg-secondary border-border-subtle">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-bg-tertiary rounded-lg flex items-center justify-center flex-shrink-0">
            <CalendarIcon className="w-6 h-6 text-text-secondary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary mb-2">Calendar Features (Phase 2)</h2>
            <p className="text-sm text-text-secondary mb-3">
              The Calendar view will help processors manage their time and never miss critical deadlines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">📍 Key Features:</h3>
                <ul className="space-y-1 text-text-secondary">
                  <li>• <strong>Closing Schedule:</strong> All loan closings in one view</li>
                  <li>• <strong>Task Deadlines:</strong> Document due dates, follow-up reminders</li>
                  <li>• <strong>Call Scheduling:</strong> Schedule borrower/vendor calls</li>
                  <li>• <strong>Team Meetings:</strong> Pipeline reviews, 1-on-1s, training</li>
                  <li>• <strong>Auto-Sync:</strong> Links to Google Calendar / Outlook</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">⚡ Smart Capabilities:</h3>
                <ul className="space-y-1 text-text-secondary">
                  <li>• <strong>Color Coding:</strong> Closings (red), calls (blue), meetings (green)</li>
                  <li>• <strong>Reminders:</strong> Email/SMS alerts 24h before critical events</li>
                  <li>• <strong>Drag & Drop:</strong> Reschedule events by dragging</li>
                  <li>• <strong>Recurring Events:</strong> Weekly pipeline reviews, team meetings</li>
                  <li>• <strong>Time Zones:</strong> Handle multi-state closings correctly</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-bg-tertiary rounded-lg border border-border-subtle">
              <p className="text-xs text-text-tertiary mb-2"><strong>Use Case Example:</strong></p>
              <p className="text-sm text-text-secondary">
                A processor with 18 active loans can see all closing dates at a glance. The calendar shows "Wilson Property - 2 PM Closing" in red on Nov 5,
                with automatic reminders sent to all parties 24 hours before. The processor can click to see all required documents and who needs to attend.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Calendar Layout Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Mini Calendar */}
        <div className="lg:col-span-1">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-text-primary">{currentMonth}</h3>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
              <div className="text-text-tertiary font-medium">S</div>
              <div className="text-text-tertiary font-medium">M</div>
              <div className="text-text-tertiary font-medium">T</div>
              <div className="text-text-tertiary font-medium">W</div>
              <div className="text-text-tertiary font-medium">T</div>
              <div className="text-text-tertiary font-medium">F</div>
              <div className="text-text-tertiary font-medium">S</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className={`h-8 flex items-center justify-center rounded ${
                    i === 3 ? 'bg-status-critical text-white font-bold' :
                    i === 4 ? 'bg-text-primary text-white font-bold' :
                    i === today.getDate() - 1 ? 'bg-accent-primary text-white font-bold' :
                    'text-text-secondary hover:bg-bg-secondary'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-status-critical rounded"></div>
                <span className="text-text-secondary">Critical events</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-text-primary rounded"></div>
                <span className="text-text-secondary">Scheduled events</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-bg-tertiary rounded border border-border-medium"></div>
                <span className="text-text-secondary">All other events</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 mt-4">
            <h3 className="font-semibold text-text-primary mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-sm" onClick={() => alert('📅 Schedule Closing\n\nSchedule a closing date with:\n• Date/time picker\n• Location (title company)\n• Attendees (borrower, title officer, etc.)\n• Automatic notifications\n\nComing in Phase 2')}>
                <CalendarIcon className="w-4 h-4 mr-2" />
                Schedule Closing
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm" onClick={() => alert('📞 Schedule Call\n\nSchedule a call with:\n• Borrower or vendor\n• Date/time picker\n• Call purpose/agenda\n• Reminder notification\n\nComing in Phase 2')}>
                <Clock className="w-4 h-4 mr-2" />
                Schedule Call
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm" onClick={() => alert('👥 Schedule Meeting\n\nSchedule a team meeting:\n• Weekly pipeline review\n• 1-on-1 with manager\n• Training session\n• Conference room booking\n\nComing in Phase 2')}>
                <Users className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </Card>
        </div>

        {/* Right: Upcoming Events */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary">Upcoming Events</h3>
              <Button size="sm" className="bg-accent-primary hover:bg-accent-hover text-white" onClick={() => alert('➕ New Event\n\nCreate a new calendar event:\n• Event type (Closing, Call, Meeting)\n• Date/time\n• Location\n• Attendees\n• Notes\n\nComing in Phase 2')}>
                <Plus className="w-4 h-4 mr-1" />
                New Event
              </Button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="p-4 border-l-4 border-l-accent-primary hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bg-secondary">
                        {event.type === 'closing' && <CalendarIcon className="w-5 h-5 text-status-critical" />}
                        {event.type === 'call' && <Clock className="w-5 h-5 text-text-secondary" />}
                        {event.type === 'meeting' && <Users className="w-5 h-5 text-text-secondary" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary">{event.title}</h4>
                        <div className="flex items-center gap-4 mt-1 text-sm text-text-secondary">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-3 h-3" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {event.time}
                          </span>
                        </div>
                        {event.location && (
                          <div className="flex items-center gap-1 mt-1 text-xs text-text-tertiary">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </div>
                        )}
                        <div className="flex items-center gap-1 mt-2 text-xs text-text-tertiary">
                          <Users className="w-3 h-3" />
                          {event.attendees.join(', ')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="h-8 px-2" onClick={() => alert('🔔 Set Reminder\n\nReminder options:\n• 24 hours before\n• 1 hour before\n• 15 minutes before\n• Custom time\n\nComing in Phase 2')}>
                        <Bell className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-text-tertiary">
                Showing next 3 events • <button className="text-accent-primary hover:underline" onClick={() => alert('View All Events - Coming in Phase 2')}>View all events →</button>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
