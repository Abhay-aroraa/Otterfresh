import React from 'react';
import plan1 from '../../assets/first/plan1.webp';
import plan2 from '../../assets/first/plan2.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown,  faWallet } from '@fortawesome/free-solid-svg-icons';

function Plans() {
  return (
    <>
      <div className="flex items-center my-10">
        <hr className="flex-grow border-gray-300" />
        <h1 className="mx-4 text-gray-400 font-bold text-2xl">Stay & Safe</h1>
        <hr className="flex-grow border-gray-300" />
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-10'>
        <div className='flex flex-col items-center'>
          <img className='w-full max-w-xs md:max-w-md lg:max-w-lg' src={plan1} alt="plan" />
          <button className='mt-5 p-2 text-xs font-medium w-full border border-green-700 text-green-700 bg-white hover:bg-green-700 hover:text-white transition-colors duration-300'>
            <FontAwesomeIcon icon={faCrown} /> SEE YOUR SUBSCRIPTION PLANS
          </button>
        </div>
        <div className='flex flex-col items-center'>
          <img className='w-full max-w-xs md:max-w-md lg:max-w-lg' src={plan2} alt="plan" />
          <button className='mt-5 p-2 text-xs font-medium w-full border border-green-700 text-green-700 bg-white hover:bg-green-700 hover:text-white transition-colors duration-300'>

            ADD FUNDS TO WALLET <FontAwesomeIcon icon={faWallet} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Plans;
