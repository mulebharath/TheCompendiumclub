import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { openPdfViewer } from '@/utils/pdfUtils';

// Sample achievements data
const achievements = [
  {
    id: 1,
    student: "Jessica Chen",
    achievement: "National Writing Competition Winner",
    description: "First place in the undergraduate category for her essay on climate change and social justice.",
    date: "April 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    pdfUrl: "/pdfs/achievements/jessica-chen-award.pdf",
    fullStoryPdf: "/pdfs/achievements/jessica-chen-full-story.pdf"
  },
  {
    id: 2,
    student: "Marcus Johnson",
    achievement: "Published in International Academic Journal",
    description: "Research paper on sustainable urban development published in the Journal of Environmental Studies.",
    date: "March 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    pdfUrl: "/pdfs/achievements/marcus-johnson-publication.pdf",
    fullStoryPdf: "/pdfs/achievements/marcus-johnson-full-story.pdf"
  },
  {
    id: 3,
    student: "Aisha Patel",
    achievement: "Photography Exhibition Feature",
    description: "Photo essay on cultural diversity selected for the National Student Arts Exhibition in New York.",
    date: "February 2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    pdfUrl: "/pdfs/achievements/aisha-patel-exhibition.pdf",
    fullStoryPdf: "/pdfs/achievements/aisha-patel-full-story.pdf"
  },
  {
    id: 4,
    student: "David Rodriguez",
    achievement: "Journalism Fellowship Recipient",
    description: "Selected for the prestigious Summer Reporting Fellowship at The Washington Post.",
    date: "January 2023",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    pdfUrl: "/pdfs/achievements/david-rodriguez-fellowship.pdf",
    fullStoryPdf: "/pdfs/achievements/david-rodriguez-full-story.pdf"
  }
];

const Achievements = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium bg-secondary rounded-full text-secondary-foreground">
            Celebrating Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Talent & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl">
            Showcasing the creativity and accomplishments of our students, from art and writing to innovations and milestones. A space to celebrate talent and inspire others!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col md:flex-row gap-6 bg-card rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 p-6 hover-lift"
            >
              <div className="md:w-1/3 flex-shrink-0">
                <div className="aspect-square overflow-hidden rounded-md">
                  <img 
                    src={item.image} 
                    alt={item.student}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">{item.date}</span>
                </div>
                
                <h3 className="font-serif text-xl font-medium mb-2">
                  {item.student}
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-4">{item.department}</span>
                  <span>{item.year}</span>
                </div>
                
                <div className="mb-4 py-2 px-3 bg-theme-yellow/10 text-theme-blue rounded-md inline-block text-sm font-medium">
                  {item.achievement}
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {item.description}
                </p>
                
                <button 
                  onClick={() => openPdfViewer(navigate, item.fullStoryPdf)}
                  className="inline-flex items-center text-theme-blue hover:text-theme-blue/80 text-sm font-medium"
                >
                  Read Full Story
                  <ExternalLink className="ml-2 h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/achievements"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            View All Achievements
            <Award className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
