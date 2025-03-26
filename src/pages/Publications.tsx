import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { openPdfViewer } from '@/utils/pdfUtils';

const Publications = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-theme-blue to-theme-blue/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Publication</h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore our diverse range of student-led articles, Annual Magazine to creative writing.
              </p>
          </div>
        </section>
        
        {/* Publications Grid */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Existing Items */}
            <PublicationCard
              title="Academic Research"
              description="Scholarly articles and research papers across various disciplines"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              pdfUrl="/pdfs/publications/academic-research.pdf"
            />

            <PublicationCard
              title="Creative Writing"
              description="Poetry, short stories, and creative non-fiction from our talented writers"
              image="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              pdfUrl="/pdfs/publications/creative-writing.pdf"
            />

            <PublicationCard
              title="Campus News"
              description="The latest happenings and developments around our campus"
              image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              pdfUrl="/pdfs/publications/campus-news.pdf"
            />

            {/* New Items */}
            <PublicationCard
              title="Student Spotlights"
              description="Featuring outstanding achievements and stories of our students"
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              pdfUrl="/pdfs/publications/student-spotlights.pdf"
            />

            <PublicationCard
              title="Tech Corner"
              description="Latest technology trends and innovations from our tech enthusiasts"
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              pdfUrl="/pdfs/publications/tech-corner.pdf"
            />

            <PublicationCard
              title="Cultural Chronicles"
              description="Exploring diverse cultural events and celebrations on campus"
              image="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              pdfUrl="/pdfs/publications/cultural-chronicles.pdf"
            />

            <PublicationCard
              title="Annual Magazine"
              description="Our yearly compilation of the best articles, artwork, and photography"
              image="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              pdfUrl="/pdfs/publications/annual-magazine.pdf"
            />

            <PublicationCard
              title="Alumni Stories"
              description="Inspiring journeys and achievements of our former students"
              image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              pdfUrl="/pdfs/publications/alumni-stories.pdf"
            />

            <PublicationCard
              title="Photo Essays"
              description="Visual storytelling through captivating photography"
              image="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              pdfUrl="/pdfs/publications/photo-essays.pdf"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Publication Card Component
const PublicationCard = ({ title, description, image, pdfUrl }) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-theme-blue dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <button
          onClick={() => openPdfViewer(navigate, pdfUrl)}
          className="mt-4 flex items-center text-theme-blue dark:text-white font-medium hover:text-theme-blue/80 dark:hover:text-white/80"
        >
          Browse articles
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Publications;
