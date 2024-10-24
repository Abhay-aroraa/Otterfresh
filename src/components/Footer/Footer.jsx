import React from 'react';
import logo2 from '../../assets/footerlogo.svg';
import img1 from '../../assets/images/footer2_files/1.webp';
import img2 from '../../assets/images/footer2_files/2.webp';
import img3 from '../../assets/images/footer2_files/3.webp';
import img4 from '../../assets/images/footer2_files/4.webp';


function Footer() {
  return (
    <>
      <div className='py-10 px-10 flex flex-col md:flex-row bg-slate-100'>

        <div className="flex-1 mx-3 mb-5 md:mb-0">
          <img className='h-12' src={logo2} alt="Red Otter Farms Logo" />
          <p className='text-gray-500 text-xs mt-4'>146B, Shahpur Jat, New Delhi 110049</p>
          <p className="text-xs text-gray-500 mt-2">otterfresh.shop@redotterfarms.in</p>
          <button className='bg-green-600 mt-2 text-white p-2 font-bold border-2 border-white hover:bg-green-500 whitespace-nowrap shadow-lg'>
    Message us on WhatsApp
</button>

        </div>

        <div className='relative w-full md:w-1/3 mx-3 mb-5 md:mb-0'>
          <div className='relative z-10 text-gray-500'>
            <p className="text-center">
              Bringing together traditional wisdom, science, and technology for sustainable, nutritious produce. Fostering a healthier you and a greener planet with easy access to clean food.
            </p>
            <h2 className="text-sm text-center">Click to learn more about Red Otter Farms</h2>
          </div>
        </div>

        <div className="w-full md:w-1/3 mx-3 mb-5 md:mb-0">
          <h3 className='text-green-500 text-sm font-semibold'>RED OTTER FARMS INSTAGRAM</h3>
          <div className='grid grid-cols-2 gap-2'>
            <img className='h-30 w-full sm:h-80 md:h-40 rounded-md hover:opacity-80 transition-opacity duration-300 cursor-pointer' src={img1} alt="post 1" />
            <img className='h-30 w-full sm:h-80 md:h-40 rounded-md hover:opacity-80 transition-opacity duration-300 cursor-pointer' src={img2} alt="post 2" />
            <img className='h-30 w-full sm:h-80 md:h-40 rounded-md hover:opacity-80 transition-opacity duration-300 cursor-pointer' src={img3} alt="post 3" />
            <img className='h-30 w-full sm:h-80 md:h-40 rounded-md hover:opacity-80 transition-opacity duration-300 cursor-pointer' src={img4} alt="post 4" />
          </div>
        </div>

        <div className='w-full md:w-1/4 mx-3 mt-2 text-gray-500 text-sm'>
          <h2 className="text-green-500 text-sm font-semibold text-center">USEFUL LINKS</h2>
          <ul className='text-sm text-gray-500 text-start my-5'>
            <li className='hover:text-green-700 cursor-pointer mt-3'>Terms & Conditions</li>
            <li className='hover:text-green-700 cursor-pointer mt-3'>Returns & Refunds Policy</li>
            <li className='hover:text-green-700 cursor-pointer mt-3'>Privacy Policy</li>
            <li className='hover:text-green-700 cursor-pointer mt-3'>Red Otter Farms</li>
            <li className='hover:text-green-700 cursor-pointer mt-3'>WhatsApp Connect</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 hidden md:flex" />
      <p className="w-full h-8 bg-slate-100 text-xs text-gray-500 text-start px-3 items-center hidden md:flex">
        © 2019-2023 OtterFresh by
        <span className="text-black"> Red Otter Farms Private Limited</span> powered by
        <span className="text-black"> SmartBeej</span>
      </p>
      
  

    </>
  );
}

export default Footer;
