import { NavigateFunction } from 'react-router-dom';

export const openPdfViewer = (navigate: NavigateFunction, pdfPath: string) => {
  const encodedPath = encodeURIComponent(pdfPath);
  navigate(`/view-pdf/${encodedPath}`);
}; 