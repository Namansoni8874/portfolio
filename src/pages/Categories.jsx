import React from 'react'
import image1 from "../assets/Media/image3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//todo=pointer ke sath name of the page woill also go 

const Categories = ({image,name}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={` h-[100%] w-[100%]`}>
      <section className='h-[100%] w-[100%] overflow-hidden relative'>
        <div className='w-[100%] h-[100%] inset-0 absolute z-[-1]'>
          <img className='w-[100%] h-[100%] object-cover' src={image}/>
        </div>
        <div className='flex flex-col items-center'>
          <div className='satisfy-regular text-white  text-[6vw]'>{name}</div>
          <div className="w-[50vw]">
            <Slider {...settings}>
           <div><img className=' h-[70vh] w-[50vw]' src={image1}/></div>
           <div><img className=' h-[70vh] w-[50vw]' src={image1}/></div>
           <div><img className=' h-[70vh] w-[50vw]' src={image1}/></div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Categories
