import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowLeft } from 'lucide-react';

const PdfViewer = () => {
  const { pdfPath } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const decodedPdfPath = decodeURIComponent(pdfPath || '');

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading PDF</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center px-4 py-2 bg-theme-blue text-white rounded hover:bg-theme-blue/90"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 mb-6 bg-theme-blue text-white rounded hover:bg-theme-blue/90"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </button>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-[calc(100vh-300px)] min-h-[500px] w-full">
              <iframe
                src={`${decodedPdfPath}#toolbar=0`}
                className="w-full h-full"
                title="PDF Viewer"
                onError={() => setError("Failed to load the PDF. The file might be missing or inaccessible.")}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PdfViewer; 