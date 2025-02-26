import React from 'react'
import image1 from "../assets/Media/image3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


//todo=pointer ke sath name of the page woill also go 

const Categories = ({image,name,color}) => {
  let style={
    color:color
  }
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
          <video className='h-[100%] w-[100%] object-cover blur-xs' autoPlay muted loop>
            <source src={image} type="video/mp4"/>
          </video>
        </div>
        <div className='w-[100%] h-[100%] flex sm:flex-row flex-col items-center justify-center gap-8'>
          <div style={style} className='cormorant-garamond-light font-bold  text-center sm:text-[4vw] text-[8vw] w-[25vw]'>{name}</div>
          <div className="sm:w-[40vw] w-[85vw] ">
            <Slider {...settings}>
           <div><img className='max-sm:rounded-4xl sm:h-[60vh] h-[50vh] w-[100%] ' src={image1}/></div>
           <div><img className='max-sm:rounded-4xl sm:h-[60vh] h-[50vh] w-[100%] ' src={image1}/></div>
           <div><img className='max-sm:rounded-4xl sm:h-[60vh] h-[50vh] w-[100%] ' src={image1}/></div>
            </Slider>
          </div>
          <div style={style} className='sm:w-[25vw] w-[80vw] text-center cormorant-garamond-light font-medium sm:text-2xl text-[5vw]'>Freezing time, framing memories, capturing souls.</div>
        </div>
      </section>
    </div>
  )
}

export default Categories
