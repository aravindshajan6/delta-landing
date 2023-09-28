import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import {heroOne, heroTwo, heroThree } from '../data/HeroData';
import { Content } from '../components/Content/Content';
import Carousel from '../components/Carousel/Carousel';


//Hero Feature Content Carousel

const HomePage = () => {
  return (
    <div>
      
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content  {...heroThree} />
      <Carousel />
    </div>
    
  )
}

export default HomePage