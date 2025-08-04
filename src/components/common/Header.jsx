import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Typography', href: '#typography' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="w-full bg-global-2">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pt-[17px] pr-[23px] pb-[17px] pl-[23px] sm:pt-[25px] sm:pr-[35px] sm:pb-[25px] sm:pl-[35px] lg:pt-[34px] lg:pr-[46px] lg:pb-[34px] lg:pl-[46px]">
          {/* Logo Section */}
          <div className="flex gap-[5px] sm:gap-[8px] lg:gap-[10px] justify-center items-center">
            <img 
              src="/images/img_logomark.png" 
              className="w-[20px] h-[24px] sm:w-[27px] sm:h-[32px] lg:w-[34px] lg:h-[40px]" 
              alt="Kit Logo" 
            />
            <img 
              src="/images/img_kit.svg" 
              className="w-[25px] h-[19px] sm:w-[33px] sm:h-[25px] lg:w-[42px] lg:h-[32px]" 
              alt="Kit Text" 
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-global-2 lg:bg-transparent shadow-lg lg:shadow-none z-50`}>
            <div className="flex flex-col lg:flex-row gap-[17px] sm:gap-[25px] lg:gap-[34px] justify-center items-center p-4 lg:p-0">
              {menuItems?.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  className="text-[14px] sm:text-[17px] lg:text-[20px] font-poppins font-medium leading-[20px] sm:leading-[26px] lg:leading-[32px] text-global-1 hover:text-gray-600 transition-colors duration-200 w-full lg:w-auto text-center lg:text-left py-2 lg:py-0"
                >
                  {item?.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex gap-[11px] sm:gap-[16px] lg:gap-[22px] justify-center items-center">
            <button className="text-[14px] sm:text-[17px] lg:text-[20px] font-poppins font-medium leading-[20px] sm:leading-[26px] lg:leading-[32px] text-global-1 hover:text-gray-600 transition-colors duration-200 mb-[3px] sm:mb-[4px] lg:mb-[6px]">
              Sign In
            </button>
            <Button
              variant="primary"
              className="text-[14px] sm:text-[17px] lg:text-[20px] font-poppins font-medium leading-[20px] sm:leading-[26px] lg:leading-[32px] rounded-[13px] sm:rounded-[19px] lg:rounded-[26px] pt-[4px] pr-[11px] pb-[4px] pl-[11px] sm:pt-[6px] sm:pr-[16px] sm:pb-[6px] sm:pl-[16px] lg:pt-[8px] lg:pr-[22px] lg:pb-[8px] lg:pl-[22px]"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
