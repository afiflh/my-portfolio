import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-gray-100 bg-black w-full text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              © {currentYear} Afif Lukmanul Hakim. Crafted with care using React & Tailwind CSS.
            </div>
            <div className="text-sm">
              Inspired by great design, built for impact.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;