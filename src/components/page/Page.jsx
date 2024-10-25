import React from 'react';
import bgimg from '../../assets/images/bg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import './Page.css';

function Page() {
    return (
        <div className="relative my-2 md:mx-6">
            {/* Adjusting the height for different screen sizes */}
            <img
                src={bgimg}
                className=" md:w-full h-[40rem] sm:[w-20rem] sm:[h-12rem]md:h-[40rem]  object-cover" // Default height for larger screens and decreased height for smaller screens
                alt="Background"
            />
            <div className="absolute bottom-4 right-4 p-4 text-white text-end rounded-lg md:block hidden">
                <p className="text-2xl md:text-5xl font-extrabold">
                    From our farms to your <br />
                    table, fresh produce with <br />
                    zero chemicals
                </p>
                <button className='text-white text-xs md:text-sm font-medium p-2 h-8 w-24 rounded-sm bg-green-700 hover:bg-green-500 mt-2'>
                    Shop now
                </button>
            </div>
            <div className="absolute top-4 left-4 p-2 text-white rounded-lg md:hidden">
                <p className=" font-serif text-5xl md:text-3xl font-extrabold">
                    From our farms to your <br />
                    table, fresh produce with <br />
                    zero chemicals
                </p>
                <button className='text-white text-sm font-medium p-2 h-8 w-24 rounded-sm bg-green-700 hover:bg-green-500 mt-7'>
                    Shop now
                </button>
            </div>
            <aside style={{ position: 'fixed', right: '20px', bottom: '90px', zIndex: 1000 }}>
                <FontAwesomeIcon icon={faWhatsapp} className='bg-green-600 text-white p-2 rounded-full text-2xl hover:cursor-pointer' />
            </aside>
        </div>
    );
}

export default Page;
