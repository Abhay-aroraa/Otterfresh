import React from 'react';
import box1 from '../../assets/images/box1.webp';
import box2 from '../../assets/1stbg_files/box.webp';
import './Box.css'


function Box() {
    return (
        <div className='my-10 relative w-full'>
            <div className='background'>
                <div className='absolute inset-0 opacity-30 backdrop-blur-lg'></div>
            <div className='relative z-10 flex flex-col md:flex-row gap-6 items-center justify-center p-4 text-white'>
                <img className='mt-4 w-full md:w-[30rem] h-auto max-h-[30rem] object-cover sm:w-[20rem]' src={box2} alt="Overlay Image" />
                <div className='text-center md:text-left md:ml-6'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-50'>Growing a Greener Future</h2>
                    <p className='text-sm md:text-base mt-4 text-gray-200'>
                        In 8+ years, we've evolved from passionate growers to reliable suppliers, championing climate-positive farming practices and providing chemical-free, safe food for health-conscious families. Learn more about Red Otter Farms here.
                    </p>
                    <div className='flex flex-wrap justify-center md:justify-start lg:justify-center gap-4'>
                        <div className='flex-1 text-center md:text-left lg:text-center'>
                            <span className='text-xl font-bold'>22500 CURATED BOXES</span>
                            <span className='text-sm'>Delivered to happy, healthy families</span>
                        </div>
                        <div className='flex-1 text-center md:text-left lg:text-center'>
                            <span className='text-xl font-bold'>80000 KGS</span>
                            <span className='text-sm'>Organic and Chemical-Free produce sold</span>
                        </div>
                        <div className='flex-1 text-center md:text-left lg:text-center'>
                            <span className='text-xl font-bold'>175000 SQUARE FEET</span>
                            <span className='text-sm'>Chemical & pesticide free, organic growing capacity</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Box;
