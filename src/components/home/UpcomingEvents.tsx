import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { openPdfViewer } from '@/utils/pdfUtils';

// Sample events data
const events = [
  {
    id: 1,
    title: "Creative Writing Workshop",
    description: "A hands-on workshop focused on developing narrative techniques for fiction and creative non-fiction.",
    date: "June 15, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Library Hall, Room 102",
    registrationLink: "#",
    detailsPdf: "/pdfs/creative-writing-workshop.pdf"
  },
  {
    id: 2,
    title: "Annual Magazine Launch Party",
    description: "Join us to celebrate the launch of our 2023 annual magazine featuring the best student works.",
    date: "July 10, 2023",
    time: "6:00 PM - 8:30 PM",
    location: "Student Center Auditorium",
    registrationLink: "#",
    detailsPdf: "/pdfs/magazine-launch-event.pdf"
  },
  {
    id: 3,
    title: "Journalism & Media Ethics Panel",
    description: "Distinguished journalists discuss the ethical challenges in modern news reporting.",
    date: "July 25, 2023",
    time: "4:00 PM - 6:00 PM",
    location: "Media Studies Building, Conference Room",
    registrationLink: "#",
    detailsPdf: "/pdfs/journalism-panel.pdf"
  }
];

const UpcomingEvents = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium bg-secondary rounded-full text-secondary-foreground">
            Mark Your Calendar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-2xl">
            Join us for workshops, launches, and special events to enhance your writing and publishing skills.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group bg-card rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover-lift"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gray-100 dark:bg-gray-800 p-6 flex flex-col justify-center items-center text-center">
                  <Calendar className="h-8 w-8 mb-3 text-primary" />
                  <h3 className="font-serif text-xl font-medium mb-1">{event.date}</h3>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
                
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-medium mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 opacity-70" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 opacity-70" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={event.registrationLink}
                      className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                    
                    <button
                      onClick={() => openPdfViewer(navigate, event.detailsPdf)}
                      className="inline-flex items-center justify-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors text-sm font-medium"
                    >
                      Event Details
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/events"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            View All Events
            <Calendar className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
