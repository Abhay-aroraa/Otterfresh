import React from 'react';
import RL from "../../assets/images/RL.svg";
import img1 from '../../assets/images/footer2_files/1.webp';
import img2 from '../../assets/images/footer2_files/2.webp';
import img3 from '../../assets/images/footer2_files/3.webp';
import img4 from '../../assets/images/footer2_files/4.webp';
import p1 from "../../assets/images/p1.jpeg";
import p2 from "../../assets/images/p2.jpeg";
import p3 from "../../assets/images/p4.png";
import p4 from "../../assets/images/p5.jpeg";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake, faHeart, faLocationArrow, faMessage, faMobile, faPhone, faShop, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <div className="px-4 md:px-20 ml-10  bg-white text-gray-800">
        <div className="flex sm:grid sm:grid-cols-2 lg:flex  text-start items-start gap-5 w-full">
          {/* Contact Section */}
          <div className="mx-2 md:mt-7  2xl:mx-10 text-gray-500 font-light text-sm md:ml-10 p-2 rounded-lg">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-green-600 text-white p-2 rounded hover:bg-green-500 transition duration-300 block text-center w-64  md:text-left"
              aria-label="Message us on WhatsApp"
            >
              Message us on WhatsApp
            </a>
            <p className="mt-4 w-72">
              Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.
            </p>
            <p className="text-xs mt-3 text-start">
              <FontAwesomeIcon className="mr-2" icon={faLocationArrow} />
              451 Wall Street, UK, London
            </p>
            <p className="text-xs mt-3 text-start">
              <FontAwesomeIcon className="mr-2" icon={faMessage} />
              Phone: (099) 453-1357
            </p>
            <p className="text-xs mt-3 text-start">
              <FontAwesomeIcon className="mr-2" icon={faMobile} />
              Fax: (064) 20332-1233
            </p>
          </div>

          {/* Information Section */}
          <div className="flex-1 md:py-10 mx-2 w-full 2xl:mx-10 max-w-xs md:w-60">
            <div className="item">
              <img src={RL} alt="Logo" className="h-20 w-full max-w-full" />
            </div>
            <div>
              <p className="text-start text-gray-500 font-light mb-1 text-sm">
                Bringing together traditional wisdom, science, and technology for sustainable, nutritious produce. Fostering a healthier you and a greener planet with easy access to clean food.
              </p>
              <h2 className="text-sm mt-5 text-start">Click to learn about Red Otter Farms</h2>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="w-full md:w-48 justify-center my-10 mx-2 text-sm  2xl:mx-10 text-gray-500 text-start">
            <h2 className="text-black text-sm font-semibold">USEFUL LINKS</h2>
            <p className="mt-2">Terms and Conditions</p>
            <p className="mt-2">Privacy Policy</p>
            <p className="mt-2">Contact Us</p>
            <p className="mt-2">Return & Refund Policy</p>
          </div>

          {/* Instagram Section */}
          <div className="justify-center sm:gap-0 md:mt-10 mb-24 2xl:mx-10">
            <h3 className="text-start text-sm items-center justify-center font-semibold">OUR INSTAGRAM</h3>
            <div className="grid grid-cols-2 gap-1 xl:mr-24 sm:w-60 md:max-w-full">
              <img src={img1} className="h-28 w-28 rounded-md hover:shadow-lgtransition-transform duration-300 cursor-pointer transform hover:scale-105" alt="Instagram 1" />
              <img src={img2} className="h-28 w-28 rounded-md hover:shadow-lg transition-transform duration-300 cursor-pointer transform hover:scale-105" alt="Instagram 2" />
              <img src={img3} className="h-28 w-28 rounded-md hover:shadow-lg transition-transform duration-300 cursor-pointer transform hover:scale-105" alt="Instagram 3" />
              <img
                src={img4}
                className="h-28 w-28 rounded-md hover:shadow-lg transition-transform duration-300 cursor-pointer transform hover:scale-105"
                alt="Instagram 4"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mx-5" />

        <div className=" md:flex flex-col md:flex-row justify-between hidden md:flex w-full">
          <div className="justify-center py-3">
            <p className="w-full bottom-0 h-8 text-xs text-gray-500 text-start px-3">
              © 2019-2023 OtterFresh by
              <span className="font-medium text-black"> Red Otter Farms Private Limited</span> powered by
              <span className="font-medium text-black"> SmartBeej</span>
            </p>
          </div>
          <div className="flex gap-7 justify-center py-3">
            <img className="h-7 w-10" src={p1} alt="Payment Option 1" />
            <img className="h-7 w-10" src={p2} alt="Payment Option 2" />
            <img className="h-7 w-10" src={p3} alt="Payment Option 3" />
            <img className="h-7 w-10" src={p4} alt="Payment Option 4" />
          </div>
        </div>

        {/* Mobile Footer Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-10 md:hidden mx-2 mt-5">
          <div className="flex flex-row justify-between items-center p-3">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faUser} />
              <p className="text-center text-xs">My Account</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faShop} />
              <p className="text-center text-xs">Shop</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faHeart} />
              <p className="text-center text-xs">Wishlist</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faShoppingCart} />
              <p className="text-center text-xs">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
