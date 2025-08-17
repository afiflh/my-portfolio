import React from 'react';
import { ArrowRight, MapPin, Mail, Github, Instagram, Linkedin } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:afiflhakim15@gmail.com',
      icon: Mail
    },
    {
      name: 'GitHub',
      href: 'https://github.com/afiflh',
      icon: Github
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/landscapiip?igsh=MWpwdXJtdWU3Y3R5ZA==',
      icon: Instagram
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/afif-lukmanul-hakim-8aa1a637b/',
      icon: Linkedin
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff7f2]">
      <div className="max-w-6xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] mb-12">
          <div className="space-y-8">
            <div className="space-y-4 justify-center">
              <h1 className="lg:text-5xl font-bold text-gray-900 leading-tight mb-10 text-center">
                Frontend Development & <br />
                <span className="">Design UI/UX</span>
              </h1>
              <p className="text-sm text-left text-gray-600 leading-relaxed max-w-lg">
                Hi, I'm <strong className="font-medium text-gray-600">Afif Lukmanul Hakim</strong>. 
                I'm a developer specializing in front-end development, focusing on modern web technologies and user experience.
              </p>
            </div>

            {/* Current Status */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Previously</span>
              </div>
              <p className="text-gray-600 text-left">Internship Frontend Developer, PT Intelix Global Crossing</p>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Location</h3>
                <div className="flex items-center space-x-3 pt-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Probolinggo-Malang, East Java</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setCurrentPage('about')}
              className="group inline-flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors pt-4"
            >
              <span className="font-medium">Learn more about me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src="/images/profile.jpeg" // Replace with your profile image path
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work Preview - Full Width Background */}
      <div className="py-20 border-t border-gray-100 w-full" style={{backgroundColor: '#C8FF93'}}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <h2 className="text-semibold font-medium text-black uppercase tracking-wider">
              Latest Work (Internship)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group cursor-pointer">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/images/Project3.png" // Replace with your project image path
                    alt="Project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Modern Project Management PT Intelix Global Crossing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We built a custom-made internal project management system to help our team manage their projects more efficiently.
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/images/Project4.png"
                    alt="Project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Presenting Our Project
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                We're excited to present our internal project management application, designed specifically for our company's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 py-20 border-t border-gray-100 text-center">
          {/* Left Column - About */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Let's create something great together
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about building digital experiences that make a difference. 
                Always open to discussing new projects and opportunities.
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Currently based in</p>
              <p className="text-gray-700">Probolinggo-Malang, East Java</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Available for</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  Freelance Projects
                </span>
                <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  Full-time Roles
                </span>
                <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                  Collaborations
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Social Media (Simplified) */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">
              Connect with me
            </h3>
            
            <div className="flex space-x-6 justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-yellow-100 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    </div>
                    <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {social.name}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;