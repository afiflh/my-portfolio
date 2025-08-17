import React from 'react';
import { ChevronLeft, Mail, Linkedin, Github, Instagram, Phone, MapPin } from 'lucide-react';

const ContactPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-[#fff7f2]">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        <button
          onClick={() => setCurrentPage('home')}
          className="group inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-12"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to home</span>
        </button>

        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900">
              Get in touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              I'm always interested in hearing about new projects and opportunities 
              and I'm eager to learn along the way. If you have any questions or just 
              want to say hello, don't hesitate to contact me.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Primary Contact</h2>
                <a
                  href="mailto:afiflhakim15@gmail.com"
                  className="group mb-4 flex items-center space-x-4 p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-[#C8FF93]"
                >
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-gray-600">
                      afiflhakim15@gmail.com
                    </div>
                    <div className="text-sm text-gray-600">
                      Best for project inquiries
                    </div>
                  </div>
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  className="group flex items-center space-x-4 p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-[#C8FF93]"
                >
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-gray-600">
                      WhatsApp Me
                    </div>
                    <div className="text-sm text-gray-600">
                      Best for quick communication
                    </div>
                  </div>
                </a>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Social Media</h2>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/afif-lukmanul-hakim-8aa1a637b/"
                    className="group flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-[#C8FF93]"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 group-hover:text-gray-600">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/afiflh"
                    className="group flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-[#C8FF93]"
                  >
                    <Github className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 group-hover:text-gray-600">GitHub</span>
                  </a>
                  <a
                    href="https://www.instagram.com/landscapiip?igsh=MWpwdXJtdWU3Y3R5ZA=="
                    className="group flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-[#C8FF93]"
                  >
                    <Instagram className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 group-hover:text-gray-600">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Current Status</h2>
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-green-900">Available for projects</div>
                      <div className="text-sm text-green-700 mt-1">
                        I'm currently open to new opportunities and freelance work.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Response Time</h2>
                <div className="p-6 border bg-yellow-50 border-gray-200 rounded-lg">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    I typically respond to emails within 24-48 hours during weekdays. 
                    For urgent matters, please mention it in your subject line. 
                    I apologize in advance for slower responses during weekends.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Location</h2>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Probolinggo-Malang, East Java</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;