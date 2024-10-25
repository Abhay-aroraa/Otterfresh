import React from 'react';
import img1 from "../../assets/first/bpx.webp";
import "./Boxstory.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

function Boxstory() {
    return (
        <div className='whole'>
            <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <h1 className="mx-4 text-gray-400 font-bold text-2xl">Our Box's Story</h1>
                <hr className="flex-grow border-gray-300" />
            </div>


            <div className="mb-4  text-gray-500 text-right md:mr-40">
                <p className="text-3xl  ">It's all about the</p>
                <p className="text-6xl  text-gray-700">curated box</p>
                <p className='text-3xl'>experience for you</p>
            </div>
            <div className='flex items-center'>
                <div className="">
                    <img src={img1} alt="Curated Box" className="w-full rounded-lg " />
                </div>
                <div className='md:w-3/5'>
                    <div className="mt-10 ">
                        <h3 className="font-serif text-lg text-gray-700">Thoughtfully selected</h3>
                        <p className=" text-xl md:text-sm  text-gray-500">Leveraging our years of knowledge and expertise in nutrition, each box is loaded with goodness.</p>
                    </div>
                    <div className="mt-10">
                        <h3 className="font-serif text-lg text-gray-700">Zero chemicals</h3>
                        <p className=" text-xl md:text-sm  text-gray-500">The produce is grown and sourced from the best farms across the country. It is clean, healthier, and tastier because we use zero chemicals.</p>
                    </div>
                    <div className="mt-10">
                        <h3 className="font-serif text-lg text-gray-700">Convenient and hassle-free</h3>
                        <p className=" text-xl md:text-sm  text-gray-500 ">Curated boxes with a wide variety of produce save you time from ordering items one at a time. And with our delivery to your doorstep, it's so easy to enjoy your meals!</p>
                    </div>
                    <button className="mt-5 p-2 text-xs font-medium w-full border border-green-700 text-green-700 bg-white hover:bg-green-700 hover:text-white transition-colors duration-300 md:w-1/2 md:mx-auto">
                        SHOP CURATED-BOXES<FontAwesomeIcon icon={faWallet}/>
                    </button>
                </div>
            </div>


















            {/* <div className="container">

                <div className="flex flex-col md:flex-row">
                    <div className="text mb-4">
                        <p className="text-2xl md:text-xl">It's all about the</p>
                        <p className="text-7xl md:text-4xl text-gray-800">curated box</p>
                        <p>experience for you</p>
                    </div>

                    <div className="md:w-1/2 flex flex-col justify-center p-4 md:p-6 md:order-2">
                        <div className="md:w-1/2 flex justify-center md:order-1">
                            <img src={img1} alt="Curated Box" className="w-full rounded-lg " />
                        </div>
                        <div className="mt-4">
                            <h3 className="font-serif text-lg text-gray-900">Thoughtfully selected</h3>
                            <p className="text-sm font-normal">Leveraging our years of knowledge and expertise in nutrition, each box is loaded with goodness.</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="font-serif text-lg text-gray-900">Zero chemicals</h3>
                            <p className="text-sm font-normal">The produce is grown and sourced from the best farms across the country. It is clean, healthier, and tastier because we use zero chemicals.</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="font-serif text-lg text-gray-900">Convenient and hassle-free</h3>
                            <p className="text-sm font-normal">Curated boxes with a wide variety of produce save you time from ordering items one at a time. And with our delivery to your doorstep, it's so easy to enjoy your meals!</p>
                        </div>
                        <button className="mt-5 p-2 text-xs font-medium w-full border border-green-700 text-green-700 bg-white hover:bg-green-700 hover:text-white transition-colors duration-300 md:w-1/2 md:mx-auto">
                            SHOP CURATED-BOXES
                        </button>
                    </div> */}

            {/* </div> */}
            {/* {/* //     </div>}
         */}
        </div>

    );
}

export default Boxstory;


