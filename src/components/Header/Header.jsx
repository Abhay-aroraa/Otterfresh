import React, { useState } from 'react';
import logo from '../../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import mango from "../../assets/images/mango.webp"

function Header() {
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white w-full py-2 md:py-1">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="relative font-medium text-sm hidden md:flex md:space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400">HOME</a>
              <FontAwesomeIcon icon={faChevronDown} className='text-green-400' />
            </li>
            <li
              className="group relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <a href="#" className="hover:text-gray-400">SHOP</a>
              <FontAwesomeIcon icon={faChevronDown} className='text-green-400' />
              {isShopOpen && (
                <div className="absolute left-0 mt-2 w-96 bg-white text-gray-800 rounded shadow-lg z-20">
                  <ul className="grid grid-cols-3 gap-2 p-2">
                    <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">All Veggies</a></li>
                    <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Fruits</a></li>
                    <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Mushrooms</a></li>
                    <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Herbs</a></li>
                    <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Essentials</a></li>
                    <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Subscription Plans</a></li>
                    <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">All Plans</a></li>
                    <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Salad Greens</a></li>
                    <li><a href="#" className="block px-5 py-2 hover:bg-gray-200">Mangoes</a></li>
                    <li className="flex justify-center items-center w-full">
                      <img src={mango} alt="Mango" className="h-40 w-40 object-contain" />
                    </li>
                  </ul>
                </div>

              )}
            </li>

            <li>
              <a href="#" className="hover:text-gray-400">RECIPES</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <img src={logo} alt="OtterFresh Logo" className="h-10 mr-2" />
        </div>

        <div className="relative font-medium text-sm w-full flex justify-between items-center">
  {/* Hidden below 786px */}
  <div className="hidden md:flex space-x-6">
    <a href="#" className="hover:text-gray-400">LOGIN / REGISTER</a>
    
    {/* Search Icon: Hidden below 786px */}
    <div className="items-center hidden md:flex hover:text-green-500 hover:cursor-pointer p-2 rounded" aria-label="Search">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  </div>

  {/* Shopping Cart Icon: Always visible, aligned to the right below 786px */}
  <div className="flex justify-end items-center w-full md:w-auto">
    <div className="items-center flex hover:text-green-500 hover:cursor-pointer p-2 rounded ml-auto" aria-label="Shopping Cart">
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
    
    {/* Cart Details: Only visible above 786px */}
    <div className="hidden md:flex items-center space-x-2">
      <span className="text-lg">0</span>
      <span className="text-lg">₹0.00</span>
    </div>
  </div>
</div>


      </div>
    </header>
  );
}

export default Header;