import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Award, ExternalLink, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { openPdfViewer } from '@/utils/pdfUtils';

const Achievements = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const studentAchievements = [
    {
      name: "Jessica Chen",
      achievement: "National Writing Competition Winner",
      description: "First place in the undergraduate category for her essay on climate change and social justice.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      department: "English Literature",
      year: "Senior",
      detailsPdf: "/pdfs/achievements/jessica-chen-competition.pdf"
    },
    {
      name: "Marcus Johnson",
      achievement: "Published in International Academic Journal",
      description: "Research paper on sustainable urban development published in the Journal of Environmental Studies.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      department: "Environmental Science",
      year: "Junior",
      detailsPdf: "/pdfs/achievements/marcus-johnson-research.pdf"
    },
    {
      name: "Aisha Patel",
      achievement: "Photography Exhibition Feature",
      description: "Photo essay on cultural diversity selected for the National Student Arts Exhibition in New York.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      department: "Fine Arts",
      year: "Senior",
      detailsPdf: "/pdfs/achievements/aisha-patel-exhibition.pdf"
    },
    {
      name: "David Rodriguez",
      achievement: "Journalism Fellowship Recipient",
      description: "Selected for the prestigious Summer Reporting Fellowship at The Washington Post.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      department: "Journalism",
      year: "Senior",
      detailsPdf: "/pdfs/achievements/david-rodriguez-fellowship.pdf"
    },
    {
      name: "Sarah Johnson",
      achievement: "National Writing Scholarship",
      description: "Awarded the prestigious National Writing Scholarship for her exceptional essay on climate change and its impact on local communities.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      department: "English Literature",
      year: "Senior",
      detailsPdf: "/pdfs/achievements/sarah-johnson-scholarship.pdf"
    },
    {
      name: "Michael Chen",
      achievement: "Published Research Paper",
      description: "Research paper on sustainable energy solutions published in the International Journal of Environmental Sciences.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      department: "Environmental Science",
      year: "Junior",
      detailsPdf: "/pdfs/achievements/michael-chen-research.pdf"
    },
    {
      name: "Emma Rodriguez",
      achievement: "Photography Exhibition",
      description: "Solo photography exhibition at the National Arts Gallery showcasing urban landscapes and cultural diversity.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      department: "Fine Arts",
      year: "Senior",
      detailsPdf: "/pdfs/achievements/emma-rodriguez-exhibition.pdf"
    },
    {
      name: "David Washington",
      achievement: "Tech Innovation Award",
      description: "Received the Tech Innovation Award for developing an app that connects students with mental health resources.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      department: "Computer Science",
      year: "Sophomore",
      detailsPdf: "/pdfs/achievements/david-washington-award.pdf"
    },
    {
      name: "Jessica Park",
      achievement: "International Debate Championship",
      description: "First place in the International Collegiate Debate Championship held in London, representing our university.",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      department: "Political Science",
      year: "Senior",
      detailsPdf: "/pdfs/achievements/jessica-park-debate.pdf"
    },
    {
      name: "Omar Hassan",
      achievement: "Mathematical Olympiad Gold Medal",
      description: "Gold medal winner at the International Mathematical Olympiad, solving complex mathematical problems with innovative approaches.",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      department: "Mathematics",
      year: "Freshman",
      detailsPdf: "/pdfs/achievements/omar-hassan-olympiad.pdf"
    }
  ];

  const departmentalAchievements = [
    {
      department: "English & Literature",
      achievements: "15 published papers, 3 national awards, 2 book publications"
    },
    {
      department: "Science & Technology",
      achievements: "10 research grants, 5 international conference presentations"
    },
    {
      department: "Arts & Design",
      achievements: "8 exhibitions, 3 design competitions won, 1 national recognition"
    },
    {
      department: "Social Sciences",
      achievements: "12 field research projects, 4 community impact initiatives"
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Get the form element
      const form = e.target as HTMLFormElement;
      
      // Add current date and time to form data
      const currentDate = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Asia/Kolkata'
      });

      // Create FormData object
      const formData = new FormData(form);
      formData.append('Submission Date', currentDate);
      
      // Send data using fetch
      fetch('https://formsubmit.co/ajax/thecompendiumclub@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Reset form and show success message
        form.reset();
        setIsFormOpen(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-theme-blue to-theme-blue/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Talent & Achievements</h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Showcasing the creativity and accomplishments of our students, from art and writing to innovations and milestones. A space to celebrate talent and inspire others!
              </p>
            </div>
          </div>
        </section>

        {/* Student Achievements */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-theme-blue">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentAchievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img 
                          src={achievement.image} 
                          alt={achievement.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1 text-theme-blue">{achievement.name}</h3>
                        <p className="text-sm text-gray-500">{achievement.department}, {achievement.year}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4 py-2 px-3 bg-theme-yellow/10 text-theme-blue rounded-md inline-block text-sm font-medium">
                      {achievement.achievement}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {achievement.description}
                    </p>
                    
                    <button 
                      onClick={() => openPdfViewer(navigate, achievement.detailsPdf)}
                      className="inline-flex items-center text-theme-blue hover:text-theme-blue/80 text-sm font-medium"
                    >
                      Learn More
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Achievement */}
        <section className="py-16 px-6 md:px-12 bg-white dark:bg-theme-blue">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 text-theme-blue dark:text-white">Share Your Achievement</h2>
            <p className="mb-8 text-gray-600 dark:text-white/80">
              Are you a student with an accomplishment to share? We want to celebrate your success and feature your story.
            </p>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="px-6 py-3 bg-theme-yellow text-theme-blue dark:bg-theme-yellow dark:text-theme-blue font-medium rounded-md hover:bg-theme-yellow/90 dark:hover:bg-theme-yellow/90 transition-colors"
            >
              Submit Your Achievement
            </button>
          </div>
        </section>

        {/* Achievement Submission Form Dialog */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-theme-blue rounded-lg w-full max-w-xl relative">
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute right-3 top-3 text-white/70 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Submit Your Achievement</h3>
                
                <form 
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm text-white mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 bg-[#021496] border border-white/30 rounded-md focus:outline-none focus:border-white text-white text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-sm text-white mb-1">Year</label>
                    <select
                      id="year"
                      name="year"
                      required
                      className="w-full px-3 py-2 bg-[#021496] border border-white/30 rounded-md focus:outline-none focus:border-white text-white text-sm"
                    >
                      <option value="">Select your year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="branch" className="block text-sm text-white mb-1">Branch</label>
                    <input
                      type="text"
                      id="branch"
                      name="branch"
                      required
                      className="w-full px-3 py-2 bg-[#021496] border border-white/30 rounded-md focus:outline-none focus:border-white text-white text-sm"
                      placeholder="Your branch/department"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-white mb-1">Email ID</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-[#021496] border border-white/30 rounded-md focus:outline-none focus:border-white text-white text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-white mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-3 py-2 bg-[#021496] border border-white/30 rounded-md focus:outline-none focus:border-white text-white text-sm"
                      placeholder="Your phone number"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="achievementType" className="block text-sm text-white mb-1">Achievement Type</label>
                    <input
                      type="text"
                      id="achievementType"
                      name="achievementType"
                      required
                      className="w-full px-3 py-2 bg-[#021496] border border-white/30 rounded-md focus:outline-none focus:border-white text-white text-sm"
                      placeholder="Type of achievement"
                    />
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-sm text-white mb-1">Details of Achievement</label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={3}
                      className="w-full px-3 py-2 bg-[#021496] border border-white/30 rounded-md focus:outline-none focus:border-white text-white text-sm"
                      placeholder="Describe your achievement in detail"
                    ></textarea>
                  </div>

                  {/* Hidden FormSubmit.co fields */}
                  <input type="hidden" name="_subject" value="New Achievement Submission!" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="true" />
                  <input type="hidden" name="_autoresponse" value="Thank you for submitting your achievement! We have received your submission and will review it soon." />

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-theme-yellow text-theme-blue font-medium rounded-md hover:bg-theme-yellow/90 transition-colors text-sm"
                    >
                      Submit Achievement
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-4 py-2 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Success Message Popup */}
        {showSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            Thank you for your submission! We will review your achievement soon.
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
