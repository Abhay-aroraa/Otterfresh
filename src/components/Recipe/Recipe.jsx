import React from 'react';
import salad from "../../assets/images/salad.webp";
import salaad from "../../assets/images/saladd.jpg";
import egg from "../../assets/images/egg.webp";

function Recipe() {
  return (
    <div className='bg-slate-50 py-10'>
      <div className="flex items-center mt-10 mb-5">
        <hr className="flex-grow border-gray-300" />
        <h1 className="mx-4 text-gray-400 font-bold text-2xl">Healthy Recipe</h1>
        <hr className="flex-grow border-gray-300" />
      </div>
      <p className='text-center text-sm text-gray-500'>Handpicked recipes to complement your curated boxes</p>
      <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-7'>
        {[
          { img: salad, title: "Warm Lettuce Salad", serves: "2", time: "25 Minutes" },
          { img: salaad, title: "Mixed Salad", serves: "4", time: "25 Minutes" },
          { img: egg, title: "Egg Salad", serves: "2", time: "25 Minutes" },
          { img: salad, title: "Caesar Salad", serves: "4", time: "25 Minutes" },
        ].map((recipe, index) => (
          <div key={index} className='flex flex-col items-center justify-center w-full sm:w-60 text-sm text-gray-500'>
            <img className='h-60 w-70 rounded-md object-cover hover:scale-105 transition-transform duration-300 cursor-pointer' src={recipe.img} alt={recipe.title} />
            <p className='mt-2 font-semibold'>{recipe.title}</p>
            <hr className='border-dotted border-green-300 w-full my-2' />
            <p className='text-sm text-gray-500'>Serves: {recipe.serves} | Time: {recipe.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
