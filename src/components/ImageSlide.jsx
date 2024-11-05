import React, { useState } from 'react'
import image from '../index.js'

function ImageSlide() {
  const [images, setImage] = useState(image)
  const [currentImage, setCurrentImage] = useState(0);
  
  
  const goToNextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(prev => prev + 1);
    }
  };
  
  const goToBackImage = () => {
    if (currentImage > 0) {
      setCurrentImage(prev => prev - 1);
    }
  };
  
  const handleError = (event) => {
    event.target.onerror = null;
    event.target.src = 'https://via.placeholder.com/800x600?text=Image+Unavailable';
  };
  
  
  return (
    // left and right div's to change slides onclick
    <div>
      <div className='fix'>
        <div onClick={goToBackImage} className={`basis-[50%] bg-transparent h-[60%] } `}>
        </div>
        <div onClick={goToNextImage} className=' basis-[50%] h-[60%] bg-transparent z-40 '>
        </div>
      </div>
        
          {/* slidesContainer */}
      <div
        className="flex absolute left-0 top-[8%]  transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentImage * 100}vw)`,
          width: '1200vw',
        }}
      >
        {/* Slides */}
        {images.map((image) => (
          <div
            className="inner w-screen h-full flex items-center justify-center"
          >
            <img
              src={image.src}
              className="w-[90vw] h-[83vh] object-cover border-x-[1px] border-gray-900  rounded-lg img-shad"
              alt={image.alt}
              onError={handleError}
            />
          </div>
        ))}
      </div>
      {/* lowerFrame */}
      <div className='w-[135%] flex items-center justify-center upper  z-20 h-[40vh] absolute  -left-[17.5%] -bottom-[24%]  shadow-lg bg-white rounded1'>
        <div className='absolute top-0 text-center  '>
          <h1 className='text-3xl font-bold text-gray-500 py-2'>{images[currentImage].content.city}</h1>
          <p className='text-sm  text-gray-500' >{images[currentImage].content.description}</p>
          <button className='text-sm font-bold text-gray-300 px-2 rounded bg-emerald-500' >Visit</button>
        </div>
      </div>
    </div>
  )
}
export default ImageSlide


