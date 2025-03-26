import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Hide the message after a few seconds (optional)
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-theme-blue to-theme-blue/90 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Have questions, submissions, or ideas? We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Left Column - Get In Touch */}
              <div>
                <h2 className="text-4xl font-bold mb-8 text-theme-blue dark:text-white">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-theme-blue dark:text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-theme-blue dark:text-foreground">Email Us</h3>
                      <p className="text-gray-600">contact@compendium.edu</p>
                      <p className="text-gray-600">submissions@compendium.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-theme-blue dark:text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-theme-blue dark:text-foreground">Call Us</h3>
                      <p className="text-gray-600">(91) 7780391081</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Send a Message */}
              <div>
                <h2 className="text-4xl font-bold mb-8 text-theme-blue dark:text-white">Send a Message</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 text-green-700 bg-green-100 rounded-md">
                    Thank you for your query! We will get back to you soon.
                  </div>
                )}
                
                <div className="bg-white dark:bg-theme-blue rounded-lg p-8 border border-gray-200 dark:border-white/30">
                  <form action="https://formsubmit.co/your@email.com" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-theme-blue dark:text-white mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-theme-blue dark:text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-theme-blue dark:text-white mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white"
                        placeholder="Your message"
                      ></textarea>
                    </div>

                    {/* Hidden fields for FormSubmit */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="http://localhost:8080/thank-you" />

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-theme-blue dark:bg-[#021496] text-white font-medium rounded-md hover:bg-theme-blue/90 dark:hover:bg-[#021496]/90 transition-colors border border-transparent dark:border-white/30"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
