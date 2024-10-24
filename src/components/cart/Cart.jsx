import React from 'react';
import Slider from 'react-slick';
import veg1 from "../../assets/first/veg.webp";
import veg2 from "../../assets/first/veg2.webp";
import salad from '../../assets/first/g.webp';
import veg3 from "../../assets/first/d.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cart.css";

const data = [
    {
        time: "Weekly Specials",
        title: "Diabetes Box",
        description: "Clean, fresh, nutritious. I am your box of fresh produce with a low glycemic index. Brings you a perfect blend of products to maintain your blood sugar levels. Loaded with the goodness of Vit A, K, C, and antioxidants. The box is perfect for salads, juicing, curries, and sauté.",
        image: veg1
    },
    {
        time: "Weekly Specials",
        title: "Vegetable Box",
        description: "Fresh, seasonal vegetables to enhance your meals. This box is filled with a variety of colorful veggies that provide essential nutrients.",
        image: veg2
    },
    {
        time: "Salad Greens Box",
        title: "#AwesomelyFresh salad greens!",
        description: "#GrownWithLove at our farms in Nainital. From leafy greens like kale, baby spinach, chard to crunchy romaine and superfood microgreens, our box brings a selection of nutritious greens that are #GoodForYou!",
        image: salad
    },
    {
        time: "Weekly Specials",
        title: "Another Vegetable Box",
        description: "Fresh, seasonal vegetables to enhance your meals. This box is filled with a variety of colorful veggies that provide essential nutrients.",
        image: veg3
    },
];

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true, 
        responsive: [
            {
                breakpoint: 640, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='mx-4 md:mx-20 my-10'>
            <div className="flex items-center my-10">
                <hr className="flex-grow border-gray-300" />
                <h1 className="mx-4 text-gray-400 font-bold text-2xl">Weekly Specials</h1>
                <hr className="flex-grow border-gray-300" />
            </div>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="flex flex-col md:flex-row rounded-lg p-6 md:p-8 w-full md:max-w-5xl mx-auto">
                            <div className="md:w-1/2 text-start flex flex-col justify-center mx-4 md:mx-0">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                                <button className="mt-5 h-10 w-full md:w-36 text-xs font-medium border border-green-700 text-white bg-green-700 hover:bg-green-800 transition-colors duration-300 rounded sm:w-full sm:h-8 sm:text-xxs">
                                    Add to cart
                                </button>
                            </div>
                            <div className="md:w-1/2 flex justify-center mx-4 md:mx-0 mt-4 md:mt-0">
                                <img src={item.image} alt={item.title} className="w-full h-64 md:h-80 rounded-lg shadow-md object-cover" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
