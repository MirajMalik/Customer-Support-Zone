// import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 py-4 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-sm font-medium">
          &copy; {currentYear} <span className="text-white">M&A</span>. 
          All rights reserved.
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;