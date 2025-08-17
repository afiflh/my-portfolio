import React from 'react';
import { ChevronLeft } from 'lucide-react';

const AboutPage = ({ setCurrentPage }) => {
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
            <h1 className="text-4xl lg:text-5xl text-gray-900 font-semibold">
              About Me
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              I believe if I try I can and I love frontend development and anything visual.
            </p>
          </div>

          {/* Background Story */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-600 leading-relaxed">
              <p>
                My journey in development began while I was studying Information Technology.
                What started as a curiosity about how websites worked grew into a passion for 
                creating digital solutions that make a difference.
              </p>
              
              <p>
                After graduating with a Bachelor's degree in Computer Science from the State Polytechnic of Malang, 
                I have spent the last three years working with various technologies, and I enjoy several areas, 
                from front-end frameworks like React to UI/UX design using Figma.
              </p>

              <p>
                I'm still learning how to build scalable web applications with a focus on user experience and clean, 
                maintainable code. My approach combines technical excellence with creative problem-solving to deliver 
                solutions users love.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline dengan background penuh - KELUAR dari container utama */}
      <div className="w-full bg-[#C8FF93] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900">Project Journey</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-black pl-8 space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-gray-900 rounded-full -ml-[25px] border-4 border-[#C8FF93]"></div>
                    <span className="text-sm text-gray-500">Jul 2024 - Dec 2024</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Internship in Creating Project Management Applications at PT Intelix Global Crossing</h3>
                  <p className="text-gray-600">Frontend Developer</p>
                  <p className="text-sm text-gray-500 mt-2">
                    During my internship, I joined the Project Management App team to build a web app for internal use. 
                    It's similar to Jira but customized. The link shows images of several menus: <a href="https://shorturl.at/IFhZS" className='font-semibold'>Drive Image Portfolio </a>  
                    (repository hosted on company GitLab).
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full -ml-[25px] border-4 border-[#C8FF93]"></div>
                    <span className="text-sm text-gray-500">May 2024 - Jun 2024</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Final Project of Rent ID's Place Rental Web Application (Task Study Independent MSIB)</h3>
                  <p className="text-gray-600">Frontend Developer</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Developing a group building booking website and I am in the frontend development and ui/ux design section.
                    Design: <a href="https://f5i5.short.gy/DesignRentId" className='font-semibold'>Figma Design</a>, Frontend: <a href="https://github.com/Arg39/kumpulan-3-finalproject" className='font-semibold'>Github Repository</a> 
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full -ml-[25px] border-4 border-[#C8FF93]"></div>
                    <span className="text-sm text-gray-500">Jan 2021 - May 2021</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Creating a Web Information System and Booking for Climbing Mount Buthak-Panderman</h3>
                  <p className="text-gray-600">First Project College</p>
                  <p className="text-sm text-gray-500 mt-2">
                    I led front-end development in a group project at college: creating an informational website for 
                    Mount Buthak-Panderman. View the website portfolio here: <a href="https://f5i5.short.gy/portofolioweb" className='font-semibold'>Drive Image Portfolio </a> and 
                    the GitHub repository here: <a href="https://github.com/afiflh/proyek1-1" className='font-semibold'>Github Repository</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education section kembali ke container normal */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
          <div 
            className="rounded-lg p-6 relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.7)), url('/images/bannerpolinema.jpg')`
            }}
          >
            <h3 className="font-medium text-gray-300 mb-2" style={{ textShadow: '0.8px 0.8px 0 black, -0.8px -0.8px 0 black, 0.8px -0.8px 0 black, -0.8px 0.8px 0 black' }}>Bachelor of Computer Science</h3>
            <p className="text-gray-300 mb-1" style={{ textShadow: '0.8px 0.8px 0 black, -0.8px -0.8px 0 black, 0.8px -0.8px 0 black, -0.8px 0.8px 0 black' }}>Politechnic State of Malang</p>
            <p className="text-sm text-gray-300" style={{ textShadow: '0.8px 0.8px 0 black, -0.8px -0.8px 0 black, 0.8px -0.8px 0 black, -0.8px 0.8px 0 black' }}>2021 - 2025 • GPA: 3.7/4.0</p>
          </div>
          <div 
            className="rounded-lg p-6 relative bg-cover bg-top bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.7)), url('/images/bannersmasa.jpg')`
            }}
          >
            <h3 className="font-medium text-gray-300 mb-2" style={{ textShadow: '0.8px 0.8px 0 black, -0.8px -0.8px 0 black, 0.8px -0.8px 0 black, -0.8px 0.8px 0 black' }}>Math and Science</h3>
            <p className="text-gray-300 mb-1" style={{ textShadow: '0.8px 0.8px 0 black, -0.8px -0.8px 0 black, 0.8px -0.8px 0 black, -0.8px 0.8px 0 black' }}>SMAN 1 Probolinggo</p>
            <p className="text-sm text-gray-300" style={{ textShadow: '0.8px 0.8px 0 black, -0.8px -0.8px 0 black, 0.8px -0.8px 0 black, -0.8px 0.8px 0 black' }}>2018 - 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;