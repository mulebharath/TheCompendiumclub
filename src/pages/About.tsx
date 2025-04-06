import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Users, Clock, Calendar, BookOpen, X } from 'lucide-react';
import Timeline from '@/components/about/Timeline';

const About = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isApplicationPeriod, setIsApplicationPeriod] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024');

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if current date is within application period
    const checkSubmissionPeriod = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11
      
      // Allow submissions from March (3) to July (7)
      const startMonth = 3; // March
      const endMonth = 7;   // July
      
      setIsApplicationPeriod(currentMonth >= startMonth && currentMonth <= endMonth);
    };

    checkSubmissionPeriod();
  }, []);

  // Get the next allowed submission month
  const getNextAllowedMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const startMonth = 3; // March
    const endMonth = 7;   // July
    
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    if (currentMonth < startMonth) {
      return monthNames[startMonth - 1]; // Return March if before March
    } else if (currentMonth > endMonth) {
      return `${monthNames[startMonth - 1]} ${new Date().getFullYear() + 1}`; // Return next year's March
    } else {
      return 'Now'; // We're in the application period
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Add current date and time to form data
      const currentDate = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Asia/Kolkata' // Indian timezone
      });
      
      // Add date to the form before submission
      const form = e.target as HTMLFormElement;
      const dateInput = document.createElement('input');
      dateInput.type = 'hidden';
      dateInput.name = 'Submission Date';
      dateInput.value = currentDate;
      form.appendChild(dateInput);
      
      form.submit();
    setIsFormOpen(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Team members data organized by year
  const teamMembersByYear = {
    '2019': [
      {
        name: "ANUSHA VAJHA",
        position: "PRESIDENT",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Founding President of The Compendium Club"
      },
      {
        name: "RAHUL SATTARAPU",
        position: "VICE PRESIDENT",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Founding Vice President of The Compendium Club"
      }
    ],
    '2021': [
      {
        name: "RAHUL SATTARAPU",
        position: "PRESIDENT",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Led the club to national recognition"
      },
      {
        name: "SHARWAN SOLANKI",
        position: "CREATIVE DIRECTOR",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Creative visionary behind our design initiatives"
      },
      {
        name: "SACHIN PISIPATI",
        position: "MANAGING DIRECTOR",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Managed club operations and growth"
      }
    ],
    '2022': [
      {
        name: "MYTHRI BORRA",
        position: "PRESIDENT",
        image: "https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Led the launch of our first annual magazine"
      },
      {
        name: "ABHIRAMI KIRTHIVASAN",
        position: "CREATIVE DIRECTOR",
        image: "https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Creative lead for our design workshops"
      },
      {
        name: "HARSHINI MUNAGALA",
        position: "MANAGING DIRECTOR",
        image: "https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Managed club operations and events"
      }
    ],
    '2023': [
      {
        name: "CHILKURI SAI CHARAN REDDY",
        position: "PRESIDENT",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Led community growth initiatives"
      },
      {
        name: "E F TRISHA ANGELINE",
        position: "CREATIVE DIRECTOR",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Creative lead for daily digest"
      },
      {
        name: "AMRUTHA VALLABHANENI",
        position: "MANAGING DIRECTOR",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Managed club operations and events"
      }
    ],
    '2024': [
      {
        name: "K YAGNESH REDDY",
        position: "PRESIDENT",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Leading digital innovation initiatives"
      },
      {
        name: "MULE BHARATH",
        position: "CREATIVE DIRECTOR",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Creative lead for design workshops"
      },
      {
        name: "ROHIT JOY",
        position: "MANAGING DIRECTOR",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Managing club operations and events"
      }
    ]
  };

  const milestones = [
    {
      year: '2019',
      title: 'Club Founding',
      description: 'The beginning of our journey',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      keyDevelopments: [
        'Club Founded'
      ]
    },
    {
      year: '2021',
      title: 'National Recognition',
      description: 'Gaining recognition for our innovative approach',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      keyDevelopments: [
        'THE COMPENDIUM\'S DEBATE',
        'DEVIANCE 2022'
      ]
    },
    {
      year: '2022',
      title: 'First Annual Magazine',
      description: 'Launching our first official publication',
      image: 'https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      keyDevelopments: [
        'THE COMPENDIUM\'S DEBATE 2.0',
        'GRAPHIC DESIGNING WORKSHOP',
        'POTTERY WORKSHOP',
        'ANNUAL MAGAZINE(2023)'
      ]
    },
    {
      year: '2023',
      title: 'Community Growth',
      description: 'Expanding our reach and impact through innovative initiatives',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      keyDevelopments: [
        'WRITER\'S WORKSHOP',
        'INTRODUCED DAILY DIGEST',
        'SCAVENGER HUNT',
        'ANNUAL MAGAZINE(2024)'
      ]
    },
    {
      year: '2024',
      title: 'Digital Innovation',
      description: 'A year of technological advancement and community engagement',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      keyDevelopments: [
        'DESIGN FOR EVERYONE WORKSHOP',
        'QUIZ-THE BATTLE OF BRAINS',
        'VIBE CODING',
        'COURTROOM CONDUNDRUM',
        'STATE VS NOBODY'
      ]
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Club of Compendium</h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Our mission, history, and the dedicated team behind our student publication society.
              </p>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-16 px-6 md:px-12 bg-white dark:bg-theme-blue text-gray-800 dark:text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-white">About Us</h2>
                <p className="text-gray-600 dark:text-white/90 mb-4">
                  Club of Compendium is dedicated to amplifying student voices through quality publications while providing hands-on experience in journalism, editing, and publishing.
                </p>
                <p className="text-gray-600 dark:text-white/90 mb-4">
                  We believe in the power of student-led media to inform, inspire, and build community. Our publications showcase academic achievements, creative works, and campus news while developing professional skills that prepare our members for future careers.
                </p>
                <p className="text-gray-600 dark:text-white/90">
                  Through workshops, mentorship, and collaborative publishing, we foster an inclusive environment where diverse perspectives are valued and students can grow as writers, editors, designers, and communicators.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-50 dark:bg-white/10 p-3 rounded-lg shadow-xl">
                  <img 
                    src="/timeline/2024.jpg"
                    alt="About Us" 
                    className="rounded-lg w-full h-[450px] object-contain bg-gray-100 dark:bg-gray-900/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-theme-blue">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4 text-theme-blue dark:text-white">Key Facts</h2>
              <p className="text-gray-600 dark:text-white/80 max-w-2xl mx-auto">
                A snapshot of our organization and impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Calendar className="h-10 w-10 text-theme-yellow" />,
                  stat: "14",
                  description: "Publishing student work"
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-theme-yellow" />,
                  stat: "2",
                  description: "Articles published"
                },
                {
                  icon: <Clock className="h-10 w-10 text-theme-yellow" />,
                  stat: "2",
                  description: "Annual workshops"
                },
                {
                  icon: <Users className="h-10 w-10 text-theme-yellow" />,
                  stat: "50+",
                  description: "Active members"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-[#020817] p-6 rounded-lg shadow-sm text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-theme-blue dark:text-white mb-2">{item.stat}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-6 md:px-12 bg-white dark:bg-[#020B5E]">
          <div className="max-w-7xl mx-auto">
            <Timeline 
              events={milestones} 
              onYearChange={setSelectedYear} 
              teamMembers={teamMembersByYear}
            />
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-theme-blue text-theme-blue dark:text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Join Our Team</h2>
            <p className="mb-8 text-gray-600 dark:text-white/80">
              Interested in writing, editing, design, or photography? Become part of our publication team and gain valuable skills while showcasing your work.
            </p>
            <div className="mt-8">
            {isApplicationPeriod ? (
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 bg-theme-yellow text-theme-blue font-bold rounded-md hover:bg-theme-yellow/90 transition-colors"
              >
                Apply to Join
              </button>
            ) : (
                <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-300/20 text-gray-600 dark:text-white font-medium rounded-md gap-2 border border-gray-200 dark:border-white/20">
                <Calendar className="h-4 w-4" />
                <span>Applications open in {getNextAllowedMonth()}</span>
              </div>
            )}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Application Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-theme-blue rounded-lg w-full max-w-xl relative my-8">
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute right-3 top-3 text-theme-blue dark:text-white/70 hover:text-theme-blue/70 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="p-6 max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-bold text-theme-blue dark:text-white mb-4 sticky top-0 bg-white dark:bg-theme-blue pt-2">Join Our Team</h3>
              
              <form 
                action="https://formsubmit.co/thecompendiumclub@gmail.com" 
                method="POST" 
                className="space-y-4"
                onSubmit={handleFormSubmit}
              >
                <div>
                  <label htmlFor="name" className="block text-sm text-theme-blue dark:text-white mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm text-theme-blue dark:text-white mb-1">Year</label>
                  <select
                    id="year"
                    name="year"
                    required
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white text-sm"
                  >
                    <option value="" className="text-theme-blue dark:text-white">Select your year</option>
                    <option value="1st Year" className="text-theme-blue dark:text-white">1st Year</option>
                    <option value="2nd Year" className="text-theme-blue dark:text-white">2nd Year</option>
                    <option value="3rd Year" className="text-theme-blue dark:text-white">3rd Year</option>
                    <option value="4th Year" className="text-theme-blue dark:text-white">4th Year</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="branch" className="block text-sm text-theme-blue dark:text-white mb-1">Branch</label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    required
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white text-sm"
                    placeholder="Your branch/department"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-theme-blue dark:text-white mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white text-sm"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-theme-blue dark:text-white mb-1">Email ID</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="domain" className="block text-sm text-theme-blue dark:text-white mb-1">Domain</label>
                  <select
                    id="domain"
                    name="domain"
                    required
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white text-sm"
                  >
                    <option value="" className="text-theme-blue dark:text-white">Select your domain</option>
                    <option value="Designer" className="text-theme-blue dark:text-white">Designer</option>
                    <option value="Reporter" className="text-theme-blue dark:text-white">Reporter</option>
                    <option value="Writer" className="text-theme-blue dark:text-white">Writer</option>
                    <option value="Video Editor" className="text-theme-blue dark:text-white">Video Editor</option>
                    <option value="Social Media" className="text-theme-blue dark:text-white">Social Media</option>
                    <option value="Photographer" className="text-theme-blue dark:text-white">Photographer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm text-theme-blue dark:text-white mb-1">Experience</label>
                  <textarea
                    id="experience"
                    name="experience"
                    required
                    rows={3}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white text-sm"
                    placeholder="Tell us about your relevant experience"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm text-theme-blue dark:text-white mb-1">How did you hear about us?</label>
                  <textarea
                    id="source"
                    name="source"
                    required
                    rows={2}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white text-sm"
                    placeholder="Let us know how you found out about the club"
                  ></textarea>
                </div>

                {/* Hidden FormSubmit.co fields */}
                <input type="hidden" name="_subject" value="New Team Application!" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://thecompendiumclub.com/about" />
                <input type="hidden" name="_captcha" value="true" />

                <div className="flex gap-3 pt-2 sticky bottom-0 bg-white dark:bg-theme-blue pb-2">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-theme-yellow text-theme-blue font-medium rounded-md hover:bg-theme-yellow/90 transition-colors text-sm"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 border border-gray-200 dark:border-white/30 text-theme-blue dark:text-white font-medium rounded-md hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-sm"
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
          Thank you for your application! We will review it and get back to you soon.
        </div>
      )}
    </div>
  );
};

export default About;
