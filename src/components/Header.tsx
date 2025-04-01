// src/components/Header.tsx
import { useState } from 'react';
import BurgerIcon from '../assets/burger.svg';
import CartIcon  from '../assets/cart.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <header className="w-full bg-white shadow-sm" role="banner">
      {/* Grid container */}
      <div className="grid grid-cols-3 items-center">
        {/* Left section - Hamburger Menu (1/3 on mobile, 1/6 on medium+) */}
        <div className="flex items-center justify-start pl-4 md:col-span-1 md:w-full">
          <button 
            type="button" 
            className="flex items-center focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            {/* Hamburger icon */}
            {/* TODO: think how to replace explicit styling in icons, because I don't like taht styling approach, better to use tailwind everywhere */}
            <img src={BurgerIcon} alt="Menu" style={{ width: '24px', height: '24px' }} />
            <span className="sr-only">Menu</span>
          </button>
        </div>
        
        {/* Middle section - Logo (1/3 on mobile, 2/3 on medium+) */}
        <div className="flex justify-center md:col-span-2">
          <a href="/" className="block">
            <img 
              className="h-10 md:h-12" 
              src="/path-to-your-logo.png" 
              srcSet="/path-to-your-logo.png 1x, /path-to-your-logo@2x.png 2x" 
              alt="ANDIANAPOL" 
            />
          </a>
        </div>
        
        {/* Right section - Cart (1/3 on mobile, 1/6 on medium+) */}
        <div className="flex items-center justify-end pr-4 md:col-span-1 md:w-full">
          <button 
            className="flex items-center focus:outline-none"
            onClick={() => setIsCartOpen(!isCartOpen)}
            aria-expanded={isCartOpen}
          >
            {/* Cart icon */}
            {/* TODO: think how to replace explicit styling in icons, because I don't like taht styling approach, better to use tailwind everywhere */}
            <img src={CartIcon} alt="Cart" style={{ width: '24px', height: '24px' }} />
            <span className="sr-only">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;