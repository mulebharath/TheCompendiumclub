import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PublicationCard } from '@/pages/Publications';

// Publication data organized by category
const publicationsByCategory = {
  articles: [
    {
      id: 1,
      title: "DeepSeek AI",
      description: "An in-depth analysis of how artificial intelligence is transforming learning environments and educational methodologies.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
      pdfUrl: "/pdfs/deepseek-ai.pdf",
    },
    {
      id: 2,
      title: "Claude AI",
      description: "A comprehensive exploration of Claude's capabilities and its impact on artificial intelligence development.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      pdfUrl: "/pdfs/claude-ai.pdf",
    },
    {
      id: 3,
      title: "Academic Research",
      description: "Scholarly articles and research papers across various disciplines",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/publications/academic-research.pdf",
    },
    {
      id: 7,
      title: "Tech Corner",
      description: "Latest technology trends and innovations from our tech enthusiasts",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/publications/tech-corner.pdf",
    },
    {
      id: 11,
      title: "Photo Essays",
      description: "Visual storytelling through captivating photography",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/publications/photo-essays.pdf",
    }
  ],
  "college-news": [
    {
      id: 4,
      title: "Campus News",
      description: "The latest happenings and developments around our campus",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/publications/campus-news.pdf",
    },
    {
      id: 5,
      title: "Student Spotlights",
      description: "Featuring outstanding achievements and stories of our students",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/publications/student-spotlights.pdf",
    },
    {
      id: 8,
      title: "Cultural Chronicles",
      description: "Exploring diverse cultural events and celebrations on campus",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/publications/cultural-chronicles.pdf",
    }
  ],
  "annual-magazine": [
    {
      id: 9,
      title: "Annual Magazine 2022-2023",
      description: "Our comprehensive annual publication showcasing student achievements, research articles, creative works, and key events of the academic year 2022-2023.",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/annualmagazine/annual_magazine_2022_2023.pdf",
    },
    {
      id: 12,
      title: "Annual Magazine 2023-2024",
      description: "The latest edition of our annual magazine highlighting exceptional student projects, faculty research, cultural events, and academic milestones from 2023-2024.",
      image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/annualmagazine/annual_magazine_2023_2024.pdf",
    }
  ],
  interviews: [
    {
      id: 10,
      title: "Alumni Stories",
      description: "Inspiring journeys and achievements of our former students",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/publications/alumni-stories.pdf",
    }
  ]
};

const categoryTitles = {
  'annual-magazine': 'Annual Magazine',
  'college-news': 'College News',
  'articles': 'Articles',
  'interviews': 'Interviews'
};

const categoryDescriptions = {
  'annual-magazine': 'Our prestigious annual publications that compile the year\'s best academic and creative work, featuring student research, articles, artwork, and memorable events.',
  'college-news': 'Stay updated with the latest happenings and developments around campus.',
  'articles': 'Explore our collection of informative and engaging articles.',
  'interviews': 'In-depth conversations and stories from our community members.'
};

const PublicationCategory = () => {
  const { category = '' } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Memoize the filtered publications to prevent unnecessary recalculations
  const publications = useMemo(() => {
    return publicationsByCategory[category] || [];
  }, [category]);

  const categoryTitle = categoryTitles[category] || 'Publications';
  const categoryDescription = categoryDescriptions[category] || '';

  if (!publications.length) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <section className="bg-gradient-to-b from-theme-blue to-theme-blue/90 text-white py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Category Not Found</h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                The requested category does not exist.
              </p>
          </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-theme-blue to-theme-blue/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryTitle}</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {categoryDescription}
            </p>
          </div>
        </section>

        {/* Publications Grid */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub) => (
              <PublicationCard
                key={pub.id}
                {...pub}
                category={categoryTitle}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicationCategory; 