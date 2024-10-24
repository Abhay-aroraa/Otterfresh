import React from 'react';
import logo from '../../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';


function Header() {
  return (
    <header className="bg-green-600 text-white w-full px-3 py-2 md:py-1">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="relative font-medium text-sm hidden md:flex md:space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400">HOME</a>
            </li>
            <li className="group relative">
              <a href="#" className="hover:text-gray-400">SHOP</a>
              <FontAwesomeIcon icon={faChevronDown} className='text-green-400'/>
              <ul className="absolute left-0 hidden mt-2 bg-white text-gray-800 group-hover:block rounded shadow-lg">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">All Veggies</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Fruits</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Grains</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Dairy</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">RECIPES</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <img src={logo} alt="OtterFresh Logo" className="h-10 mr-2" />
        </div>
       
        <div className="relative font-medium text-sm  items-center hidden md:flex md:space-x-6  ">
          <a href="#" className="hover:text-gray-400">LOGIN / REGISTER</a>
            
          <div className=' items-center gap-3 hidden md:flex  hover:bg-green-500 hover:cursor-pointer'>
          <FontAwesomeIcon icon={faSearch}/>

          <FontAwesomeIcon icon ={faShoppingCart}/>
          </div>
        

          <div className=" items-center  hidden md:flex">
            <span className="text-lg">0</span>
            <span className="text-lg">₹0.00</span>
          </div>
        </div>
        </div>
      

  
     
    </header>
  );
}

export default Header;
