'use client';

import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className="w-full sticky top-0 z-50  backdrop-blur-sm"
      style={{ backgroundColor: '#1940AB' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4 min-h-[84px]">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Hamara Jobs"
            width={130}
            height={72}
            priority
            className="object-contain"
            style={{
              width: '130px',
              height: '62px',
              opacity: 1
            }}
          />
        </div>

        {/* Desktop Employer Login Button */}
        <div className="hidden md:flex">
          <button 
            className="flex items-center justify-center border-none rounded-2xl transition-all duration-300 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            style={{
              width: '212px',
              height: '60px',
              paddingTop: '8px',
              paddingRight: '20px',
              paddingBottom: '8px',
              paddingLeft: '20px',
              gap: '10px',
              borderRadius: '16px',
              backgroundColor: 'var(--White, rgba(255, 255, 255, 1))',
              color: 'var(--Primary, rgba(0, 45, 165, 1))',
              fontFamily: 'IBM Plex Sans, Poppins, sans-serif',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '28px',
              letterSpacing: '-0.3px',
              opacity: 1
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(239, 246, 255, 1)';
              e.target.style.transform = 'translateY(-1px)';
            }}
           
            aria-label="Employer Login"
          >
            <Image
              src="/assets/bag_icon.png"
              alt="Briefcase"
              width={20}
              height={20}
              className="object-contain"
              style={{
                width: '20px',
                height: '20px',
                opacity: 1
              }}
            />
            <span>Employer login</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer p-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-6 h-4 relative">
            <span 
              className={`block absolute h-0.5 w-full bg-white rounded-sm left-0 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span 
              className={`block absolute h-0.5 w-full bg-white rounded-sm left-0 top-2 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`block absolute h-0.5 w-full bg-white rounded-sm left-0 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`} 
        style={{ backgroundColor: 'var(--Primary, rgba(0, 45, 165, 1))' }}
      >
        <div className="px-5 pb-6">
          <button 
            className="flex items-center justify-center border-none rounded-2xl w-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-900"
            style={{
              height: '60px',
              paddingTop: '8px',
              paddingRight: '20px',
              paddingBottom: '8px',
              paddingLeft: '20px',
              gap: '10px',
              borderRadius: '16px',
              backgroundColor: 'var(--White, rgba(255, 255, 255, 1))',
              color: 'var(--Primary, rgba(0, 45, 165, 1))',
              fontFamily: 'IBM Plex Sans, Poppins, sans-serif',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '28px',
              letterSpacing: '-0.3px',
              opacity: 1
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(239, 246, 255, 1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--White, rgba(255, 255, 255, 1))';
            }}
            aria-label="Employer Login"
          >
            <Image
              src="/assets/bag_icon.png"
              alt="Briefcase"
              width={20}
              height={20}
              className="object-contain"
              style={{
                width: '20px',
                height: '20px',
                opacity: 1
              }}
            />
            <span>Employer login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;