import { useState, useRef, useEffect } from 'react';
import Navigation from './navigation';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Routes';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);
    // Remove event listener on unmount
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="relative mx-auto items-center bg-background text-brown-200">
      <div className="flex justify-between items-center w-[95%] mx-auto pt-4">
        <p className="bg-twe_blue-300 font-semibold text-xl pl-2">
          <Link to={ROUTES.Home}>Anna-Yodit</Link>
        </p>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <img src={process.env.PUBLIC_URL + '/images/hamburger.svg'} alt="hamburger icon" className="w-8" />
        </button>

        {/* Slide-in Navigation */}
        <div
          ref={menuRef}
          className={`fixed z-50 top-0 right-0 w-64 h-full bg-brown-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <button
            className="absolute top-4 right-2 text-2xl p-2"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <img src={process.env.PUBLIC_URL + '/images/cross.svg'} alt="close icon" className="w-8" />
          </button>
          <Navigation
            navClassName={``}
            ulClassName={`space-y-6 text-lg`}
            divClassName={`mt-36`}
            liClassName={`ml-6 mb-6`}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <Navigation
            navClassName={`mx-auto`}
            ulClassName={`flex flex-row justify-between pt-6 font-lg`}
            divClassName={`flex`}
            liClassName={`mx-6`}
          />
        </nav>
      </div>
    </header>
  );
}
