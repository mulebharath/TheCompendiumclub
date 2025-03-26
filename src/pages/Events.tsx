import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { openPdfViewer } from '@/utils/pdfUtils';

const Events = () => {
  const navigate = useNavigate();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const conductedEvents = [
    {
      title: "Creative Writing Masterclass",
      date: "March 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Main Auditorium",
      description: "An intensive workshop on creative writing techniques led by renowned author Sarah Johnson.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Workshop",
      detailsPdf: "/pdfs/events/creative-writing-masterclass.pdf"
    },
    {
      title: "Digital Media Summit",
      date: "February 28, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Conference Hall",
      description: "A full-day event exploring the latest trends in digital publishing and media.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Conference",
      detailsPdf: "/pdfs/events/digital-media-summit.pdf"
    },
    {
      title: "Photography Workshop Series",
      date: "January 20, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Art Studio",
      description: "Professional photographers shared insights on capturing compelling images for publications.",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Workshop",
      detailsPdf: "/pdfs/events/photography-workshop.pdf"
    }
  ];

  const upcomingEvents = [
    {
      title: "Creative Writing Workshop",
      date: "June 15, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Library Hall, Room 302",
      description: "Join our workshop to enhance your creative writing skills with guidance from published authors.",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "30 seats",
      category: "Workshop",
      detailsPdf: "/pdfs/events/creative-writing-workshop.pdf"
    },
    {
      title: "Annual Magazine Launch",
      date: "July 2, 2023",
      time: "5:30 PM - 7:30 PM",
      location: "Main Auditorium",
      description: "Celebrate the launch of our annual magazine featuring the best works from our students.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "200 seats",
      category: "Launch Event",
      detailsPdf: "/pdfs/events/magazine-launch.pdf"
    },
    {
      title: "Research Paper Writing Seminar",
      date: "July 10, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Science Building, Conference Room B",
      description: "Learn the essentials of writing and publishing academic research papers.",
      image: "https://images.unsplash.com/photo-1579389083395-f9c9891f5a5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "50 seats",
      category: "Seminar",
      detailsPdf: "/pdfs/events/research-paper-seminar.pdf"
    },
    {
      title: "Editor's Masterclass",
      date: "July 25, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Arts Building, Room 105",
      description: "An intensive session on editorial skills and best practices led by industry professionals.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "25 seats",
      category: "Masterclass",
      detailsPdf: "/pdfs/events/editors-masterclass.pdf"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-theme-blue to-theme-blue/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Workshops</h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Join us for interactive workshops, inspiring talks, and networking opportunities with fellow writers and publishers.
              </p>
            </div>
          </div>
        </section>

        {/* Conducted Events */}
        <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-12 text-theme-blue dark:text-white">Conducted Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conductedEvents.map((event, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover-lift border border-gray-200 dark:border-gray-800">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-theme-yellow text-theme-blue px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2 text-theme-blue dark:text-white">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="h-4 w-4 mr-2 text-theme-blue dark:text-white" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="h-4 w-4 mr-2 text-theme-blue dark:text-white" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4 mr-2 text-theme-blue dark:text-white" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => openPdfViewer(navigate, event.detailsPdf)}
                      className="px-4 py-2 bg-theme-blue dark:bg-theme-blue text-white font-medium rounded hover:bg-theme-blue/90 transition-colors flex items-center justify-center gap-2"
                    >
                      View Details
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-12 text-theme-blue">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-theme-yellow text-theme-blue px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2 text-theme-blue">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-theme-blue" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-theme-blue" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-theme-blue" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-theme-blue" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    
                    <a 
                      href="#"
                      className="inline-flex items-center justify-center px-4 py-2 bg-theme-blue text-white rounded-md hover:bg-theme-blue/90 transition-colors text-sm font-medium"
                    >
                      Register Now
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
