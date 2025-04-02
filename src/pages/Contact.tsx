import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, Instagram } from 'lucide-react';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email using FormSubmit service
      const form = e.target as HTMLFormElement;
      form.submit();
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide the success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-theme-blue dark:bg-theme-blue text-white py-16">
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
        <section className="py-16 px-6 md:px-12 bg-white dark:bg-background">
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
                      <h3 className="text-lg font-medium mb-1 text-theme-blue dark:text-white">Email Us</h3>
                      <p className="text-gray-800 dark:text-gray-200">thecompendiumiare@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                      <Instagram className="h-6 w-6 text-theme-blue dark:text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-theme-blue dark:text-white">Follow Us</h3>
                      <a 
                        href="https://instagram.com/thecompendium.iare" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-800 dark:text-gray-200 hover:text-theme-blue dark:hover:text-white transition-colors"
                      >
                        @thecompendium.iare
                      </a>
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-[#021496] border border-gray-200 dark:border-white/30 rounded-md focus:outline-none focus:border-theme-blue dark:focus:border-white text-theme-blue dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
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
                      className="w-full px-6 py-3 text-theme-blue font-medium rounded-md transition-colors border border-gray-200 dark:border-white/30 bg-secondary/20 dark:bg-[#021496] hover:bg-secondary/30 dark:hover:bg-[#021496]/90 dark:text-white"
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
