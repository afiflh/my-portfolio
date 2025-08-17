import React from 'react';
import { ChevronLeft, ExternalLink, Camera, Users, MessageCircle, Film } from 'lucide-react';

const SkillsPage = ({ setCurrentPage }) => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: "Advanced", description: "Building interactive UIs and SPAs" },
        { name: "Laravel PHP", level: "Intermediate", description: "Frontend development using Blade template engine, layouting, and integration with UI components" },
        { name: "Javascript", level: "Intermediate", description: "Interactive web development using JavaScript" },
        { name: "Tailwind CSS", level: "Intermediate", description: "Utility-first CSS framework" }
      ]
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", level: "Intermediate", description: "The ultimate tool for interface design and prototyping" },
        { name: "Adobe XD", level: "Beginner", description: "Alternative tools for UX design" },
        { name: "Photoshop", level: "Advanced", description: "For image editing and digital manipulation" },
        { name: "Ilustrator", level: "Beginner", description: "To create vector graphics and logos" }
      ]
    }
  ];

  const softSkills = [
    {
      icon: Camera,
      title: "Photography & Videography",
      level: "Intermediate",
      description: "Documenting company activities and events through photos and videos for publication and archival purposes",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Film,
      title: "Video Editing",
      level: "Advanced",
      description: "Post-production editing for travel vlogs and content creation using professional editing software",
      color: "bg-orange-100 text-orange-700"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      level: "Advanced",
      description: "Easy to work with in team environments, adaptable to different working styles and project requirements",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: MessageCircle,
      title: "Communication",
      level: "Advanced",
      description: "Strong verbal and written communication skills, able to explain technical concepts clearly to non-technical stakeholders",
      color: "bg-blue-100 text-blue-700"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff7f2]">
      <div className="max-w-4xl mx-auto px-6 pt-20">
      <button
        onClick={() => setCurrentPage('home')}
        className="group inline-flex items-center space-x-2 text-lg font-medium text-gray-800 hover:text-black transition-colors"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to home</span>
      </button>

      </div>

      {/* Hard Skills Section dengan background #FDFFB6 */}
      <div className="w-full py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10">
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900">
                Hard Skills
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                Learning skills that we have not mastered before is indeed difficult, but we have to learn.
              </p>
            </div>

            {/* Hard Skills Grid */}
            <div className="space-y-12">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">{category.title}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors bg-[#C8FF93] backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-medium text-gray-900">{skill.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            skill.level === 'Advanced' ? 'bg-green-100 text-green-700' :
                            skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills Section dengan background #C8FF93 */}
      <div className="w-full bg-[#C8FF93] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {/* Soft Skills Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900">
                  Soft Skills
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                  Apart from the skills learned in the world of education, humans definitely have skills that already exist within themselves.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors group bg-[#fff7f2] backdrop-blur-sm">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                            <IconComponent className="w-6 h-6 text-gray-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-medium text-gray-900">{skill.title}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${skill.color}`}>
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Content Creation Passion */}
              <div className="bg-[#fff7f2] rounded-lg p-8 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-yellow-100 hover:bg-yellow-200 flex items-center justify-center">
                      <Camera className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Travel Content Creator</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      I'm passionate about creating travel content and aspire to become a professional content creator. 
                      I love documenting journeys through photography and videography, sharing stories of places and experiences 
                      that inspire others to explore the world. This creative passion complements my technical skills, 
                      allowing me to bring a unique visual perspective to digital projects. You can find my travel documentation in video form on 
                      <a href="https://www.tiktok.com/@haoohai?_t=ZS-8yvrAD250NT&_r=1" className='font-semibold hover:text-blue-500'> TikTok</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section kembali ke container normal */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Certifications & Courses</h2>
          <div className="space-y-4">
            
            {/* Card 1 */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-[#C8FF93]">
              <div>
                <h3 className="font-medium text-gray-900">Fullstack Developer - Studi Independent (MSIB)</h3>
                <p className="text-sm text-gray-600">PT Otak Kanan • 2024</p>
              </div>
              <a 
                href="https://drive.google.com/file/d/1ysWb2DQVr2rEbLN4UjRgn6z-DImtsbe3/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-gray-500 hover:text-blue-600" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-[#C8FF93]">
              <div>
                <h3 className="font-medium text-gray-900">UI/UX Design - Short Class</h3>
                <p className="text-sm text-gray-600">MySkill • 2023</p>
              </div>
              <a 
                href="https://drive.google.com/file/d/19MVZ_5Tj3SevrUXc-StbD9-n3v5X82TV/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-gray-500 hover:text-blue-600" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;