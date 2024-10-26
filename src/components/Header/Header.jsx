import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes, faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import mango from "../../assets/images/mango.webp";

function Header() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false); // Close menu when clicking outside
      }
    };

    // Add event listener when the menu is open
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Remove event listener when component unmounts or menu is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-green-600 flex  text-white lg:flex justify-between xl:justify-evenly md:px-8  py-4">
      <div className="relative top-5 md:top-2">
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </button>

        {/* Logo */}
        {/* <img src={logo} alt="OtterFresh Logo" className="h-8" /> */}
      

      {/* Desktop Menu */}
      <nav className="hidden lg:flex flex-grow justify-center space-x-6">
        <ul className="flex items-center space-x-6">
          <li className="group relative">
            <a href="#" className="hover:text-gray-400">HOME</a>
            <FontAwesomeIcon icon={faChevronDown} />
            <ul className="absolute left-0 top-full hidden group-hover:flex flex-col gap-1 p-1 bg-white text-gray-800 rounded shadow-md z-10">
              <li className="hover:bg-gray-100"><a href="#">Option 1</a></li>
              <li className="hover:bg-gray-100"><a href="#">Option 2</a></li>
              <li className="hover:bg-gray-100"><a href="#">Option 3</a></li>
              <li className="hover:bg-gray-100"><a href="#">Option 4</a></li>
            </ul>
          </li>

          <li
            className="group relative"
            onMouseEnter={() => setIsShopOpen(true)}
            onMouseLeave={() => setIsShopOpen(false)}
          >
            <a href="#" className="hover:text-gray-400">SHOP</a>
            <FontAwesomeIcon icon={faChevronDown} />
            {isShopOpen && (
              <div className="absolute left-0 w-96 bg-white text-gray-800 rounded shadow-lg z-20">
                <ul className="grid grid-cols-3 gap-2 p-2">
                  <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">All Veggies</a></li>
                  <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Fruits</a></li>
                  <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Mushrooms</a></li>
                  <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Herbs</a></li>
                  <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Essentials</a></li>
                  <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Subscription Plans</a></li>
                  <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Salad Greens</a></li>
                  <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Mangoes</a></li>
                  <li className="flex justify-center items-center w-full">
                    <img src={mango} alt="Mango" className="h-40 w-40 object-contain" />
                  </li>
                </ul>
              </div>
              
                 
            )}
          </li>
          <li><a href="#" className="hover:text-gray-400">RECIPES</a></li>
        </ul>
      </nav>
      </div>
      
      <img src={logo} alt="OtterFresh Logo" className="flex justify-center h-7" />
      
      <div className="md:hidden relative bottom-7   flex items-end hover:text-green-500 p-2 rounded" aria-label="Shopping Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div> 
       
  
     
      {/* Right-side Icons */}
      <div className="flex items-center justify-between lg:space-x-6">
        <div className="hidden  lg:flex ">
          <a href="#" className="hover:text-gray-400">LOGIN / REGISTER</a>
        </div>

        <div className="hidden lg:flex items-center hover:text-green-500 p-2 rounded" aria-label="Search">
          <FontAwesomeIcon icon={faSearch} />
        </div>

        <div className=" hidden md:flex items-center hover:text-green-500 p-2 rounded" aria-label="Shopping Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        

        <div className="hidden lg:flex items-center space-x-2">
          <span className="text-lg">₹0.00</span>
        </div>
</div>    


      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="fixed top-0 left-0 h-full w-64 bg-white text-green-500 shadow-lg z-50">
          <ul className="flex flex-col space-y-6 p-4">
            <li><a href="#" className="hover:text-gray-400">HOME</a></li>
            <li><a href="#" className="hover:text-gray-400">SHOP</a></li>
            <li><a href="#" className="hover:text-gray-400">RECIPES</a></li>
            <li><a href="#" className="hover:text-gray-400">LOGIN / REGISTER</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
