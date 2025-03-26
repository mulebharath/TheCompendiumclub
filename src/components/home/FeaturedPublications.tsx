import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { openPdfViewer } from '@/utils/pdfUtils';

// Sample publication data
const publications = [
  {
    id: 1,
    title: "The Impact of AI on Modern Education",
    excerpt: "An in-depth analysis of how artificial intelligence is transforming learning environments and educational methodologies.",
    category: "Research",
    author: "James Wilson",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    pdfUrl: "/pdfs/ai-education-impact.pdf"
  },
  {
    id: 2,
    title: "The Poetry of Urban Landscapes",
    excerpt: "A creative exploration of city architecture and its influence on modern literary expressions.",
    category: "Creative Writing",
    author: "Emily Chen",
    date: "April 28, 2023",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    pdfUrl: "/pdfs/urban-poetry.pdf"
  },
  {
    id: 3,
    title: "An Interview with Dr. Sarah Johnson: Pioneering Climate Research",
    excerpt: "Exclusive insights from the award-winning environmental scientist on her groundbreaking work.",
    category: "Interview",
    author: "Michael Taylor",
    date: "April 10, 2023",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    pdfUrl: "/pdfs/climate-research-interview.pdf"
  }
];

const FeaturedPublications = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block py-1 px-3 mb-4 text-xs font-medium bg-secondary rounded-full text-secondary-foreground">
              Featured Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our collection of outstanding student works spanning research, creative writing, and interviews.
            </p>
          </div>
          <Link 
            to="/publications" 
            className="mt-6 md:mt-0 inline-flex items-center text-sm font-medium hover:text-primary/70 transition-colors group"
          >
            View all publications
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <article 
              key={pub.id} 
              className="group flex flex-col bg-card rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pub.image} 
                  alt={pub.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block py-1 px-3 text-xs font-medium bg-black/70 text-white rounded-full">
                    {pub.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow p-6">
                <div className="mb-3 flex items-center text-xs text-muted-foreground">
                  <span>{pub.author}</span>
                  <span className="mx-2">•</span>
                  <span>{pub.date}</span>
                </div>
                
                <h3 className="font-serif text-xl font-medium mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {pub.excerpt}
                </p>
                
                <button 
                  onClick={() => openPdfViewer(navigate, pub.pdfUrl)}
                  className="mt-auto inline-flex items-center text-sm font-medium hover:text-primary/70 transition-colors self-start"
                >
                  Read article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPublications;
