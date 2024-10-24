import React from 'react';

function Reviews() {
  return (
    <div className="text-center items-center my-10">
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <h1 className="mx-4 text-gray-400 font-bold text-2xl">Testimonials</h1>
        <hr className="flex-grow border-gray-300" />
      </div>
      <div>
        <p className="text-xs text-gray-600">Happy Customers 😄</p>
      </div>
      <div className="flex flex-wrap justify-center items-center hover:cursor-pointer text-start flex-col sm:flex-row  gap-7">
        <div className="h-64 w-full max-w-xs bg-white shadow-md hover:shadow-xl ease-in rounded-sm p-4">
          <div className="text-xl">⭐⭐⭐⭐⭐</div>
          <p className="mt-2 text-xs text-gray-500">
            Your salads are the best we have had in India. Very pure and yummy!
          </p>
          <p className="font-bold mt-12">Jasper Reid
          <span className="text-xs">MD, Wendy's & Jamie's Italian</span></p>
        </div>
        <div className="h-64 w-full max-w-xs bg-white shadow-md hover:shadow-xl ease-in rounded-sm p-4">
          <div className="text-xl">⭐⭐⭐⭐⭐</div>
          <p className="mt-2 text-xs text-gray-500">
            Bless your team! Salad greens are such a treat, brimming with different kinds of deliciousness!
          </p>
          <p className="font-bold mt-12">Nilanjana Roy
          <span className="text-xs">Author & Columnist</span></p>
        </div>
        <div className="h-64 w-full max-w-xs bg-white shadow-md hover:shadow-xl ease-in rounded-sm p-4">
          <div className="text-xl">⭐⭐⭐⭐⭐</div>
          <p className="mt-2 text-xs text-gray-500">
            I am enjoying the fact that my kids are loving the greens... and eating them every day.
          </p>
          <p className="font-bold mt-12">Anasuya Mohanty Chatterjee</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
