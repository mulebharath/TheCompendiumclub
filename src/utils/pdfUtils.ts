import { NavigateFunction } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import PDFViewerModal from '@/components/PDFViewerModal';

export const isLocalPath = (path: string): boolean => {
  // Check if the path is relative to the public folder
  return path.startsWith('/pdfs/') || path.startsWith('pdfs/');
};

export const formatLocalPath = (path: string): string => {
  // Convert forward slashes to backslashes for Windows
  return path.replace(/\//g, '\\');
};

export const getPublicPdfPath = (pdfPath: string): string => {
  // Remove leading slash if present
  const cleanPath = pdfPath.startsWith('/') ? pdfPath.slice(1) : pdfPath;
  
  // In development, use the local server URL with correct protocol
  if (process.env.NODE_ENV === 'development') {
    return `${window.location.protocol}//${window.location.host}/${cleanPath}`;
  }
  
  // In production (Vercel), use the deployed URL
  return `${window.location.origin}/${cleanPath}`;
};

export const getAbsolutePdfPath = (pdfPath: string): string => {
  if (isLocalPath(pdfPath)) {
    return getPublicPdfPath(pdfPath);
  }
  
  return pdfPath;
};

export const openPdfViewer = (navigate: NavigateFunction, pdfUrl: string, title?: string) => {
  if (isLocalPath(pdfUrl)) {
    try {
      // For files in public folder, get the full URL
      const fullUrl = getPublicPdfPath(pdfUrl);
      
      // Extract the actual filename from the URL
      const fileName = pdfUrl.split('/').pop() || 'document.pdf';
      
      // In local development, use a simple approach to avoid issues
      if (process.env.NODE_ENV === 'development') {
        window.open(fullUrl, '_blank');
        return;
      }

      // Create a modal container if it doesn't exist
      let modalContainer = document.getElementById('pdf-modal-container');
      if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'pdf-modal-container';
        document.body.appendChild(modalContainer);
      }
      
      // Create root for React 18
      const root = createRoot(modalContainer);
      
      // Render the PDF modal in the container
      const handleClose = () => {
        root.unmount();
      };
      
      root.render(
        React.createElement(PDFViewerModal, {
          pdfUrl: fullUrl,
          fileName: fileName.replace('.pdf', ''), // Remove .pdf extension
          onClose: handleClose,
        })
      );
    } catch (error) {
      console.error('Error opening PDF viewer:', error);
      // Fallback to direct PDF opening
      const fullUrl = getPublicPdfPath(pdfUrl);
      window.open(fullUrl, '_blank');
    }
  } else {
    // For external URLs, use the PDF viewer component
    navigate(`/view-pdf/${encodeURIComponent(pdfUrl)}`);
  }
}; 