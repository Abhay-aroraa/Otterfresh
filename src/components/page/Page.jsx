import React from 'react';
import bgimg from '../../assets/images/bg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Page.css';

function Page() {
    return (
        <div className="relative my-2 mt-0 md:mt-2 lg:my-0">
            <div
                className="relative w-full md:h-[40rem] h-72 sm:w-full sm:h-96 md:my-2 xl:my-6 xl:w-[80rem] xl:mx-auto bg-cover bg-center"
                style={{ backgroundImage: `url("https://images.pexels.com/photos/775207/pexels-photo-775207.jpeg?auto=compress&cs=tinysrgb&w=600")` }}
            >
                {/* Text overlay positioned absolutely */}
                <div className="absolute bottom-4 right-4 p-4 text-white text-end rounded-lg hidden md:block">
                    <p className="text-xl md:text-5xl font-extrabold">
                        From our farms to your <br />
                        table, fresh produce with <br />
                        zero chemicals
                    </p>
                    <button className="text-white text-xs md:text-sm font-medium p-2 h-8 w-24 rounded-sm bg-green-700 hover:bg-green-500 mt-2">
                        Shop now
                    </button>
                </div>
            </div>

            <div className="absolute top-4 left-4 p-2 text-white rounded-lg md:hidden">
                <p className="text-3xl sm:text-4xl md:text-3xl font-extrabold">
                    From our farms to your <br />
                    table, fresh produce with <br />
                    zero chemicals
                </p>
                <button className='text-white text-sm font-medium p-2 h-8 w-24 rounded-sm bg-green-700 hover:bg-green-500 mt-7'>
                    Shop now
                </button>
            </div>

            <aside style={{ position: 'fixed', right: '20px', bottom: '90px', zIndex: 1000 }}>
                <FontAwesomeIcon icon={faWhatsapp} className='bg-green-600 text-white p-2 rounded-full text-4xl hover:cursor-pointer' />
            </aside>
        </div>
    );
}

export default Page;

