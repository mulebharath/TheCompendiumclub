import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { openPdfViewer } from '@/utils/pdfUtils';

// Sample publication data - replace with your actual data
const publicationsData = {
  'annual-magazine': {
    title: 'Annual Magazine',
    items: [
      {
        title: 'Magazine 2023',
        description: 'Our latest annual publication showcasing the best of student work.',
        image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f',
        date: 'December 2023',
        pdfUrl: '/pdfs/magazine-2023.pdf'
      },
      // Add more magazine entries
    ]
  },
  'college-news': {
    title: 'College News',
    items: [
      {
        title: 'Campus Update: Spring 2024',
        description: 'Latest news and updates from around the campus.',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
        date: 'March 2024',
        pdfUrl: '/pdfs/campus-update-2024.pdf'
      },
      // Add more news entries
    ]
  },
  'articles': {
    title: 'Articles',
    items: [
      {
        title: 'Student Achievement Spotlight',
        description: 'Featuring outstanding accomplishments of our students.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        date: 'February 2024',
        pdfUrl: '/pdfs/student-achievements-2024.pdf'
      },
      // Add more articles
    ]
  },
  'interviews': {
    title: 'Interviews',
    items: [
      {
        title: 'Faculty Interview Series',
        description: 'In-depth conversations with our distinguished faculty members.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
        date: 'January 2024',
        pdfUrl: '/pdfs/faculty-interviews-2024.pdf'
      },
      // Add more interviews
    ]
  }
};

const PublicationCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!category || !publicationsData[category as keyof typeof publicationsData]) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
            <h1 className="text-3xl font-bold text-theme-blue dark:text-white">
              Category Not Found
            </h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryData = publicationsData[category as keyof typeof publicationsData];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-theme-blue to-theme-blue/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryData.title}</h1>
            <p className="text-lg text-white/80">
              Browse our collection of {categoryData.title.toLowerCase()}
            </p>
          </div>
        </section>

        {/* Publications Grid */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.items.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover-lift">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-theme-blue dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {item.date}
                      </div>
                      <button
                        onClick={() => openPdfViewer(navigate, item.pdfUrl)}
                        className="px-4 py-2 bg-theme-blue text-white rounded-md hover:bg-theme-blue/90 transition-colors text-sm"
                      >
                        Read Article
                      </button>
                    </div>
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

export default PublicationCategory; 