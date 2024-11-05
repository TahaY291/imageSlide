import React, { useState } from 'react';
import UpperFrame from './UpperFrame';
import ImageSlide from './ImageSlide';


function Result() {


  return (
    <section className="w-full h-screen relative overflow-hidden flex items-center justify-center">
      <UpperFrame />
      <ImageSlide/>
    </section>
  );
}

export default Result;
