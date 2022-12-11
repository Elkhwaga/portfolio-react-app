import React from 'react';
import Blog from '../components/Blog';
import About from '../components/About';
import Works from '../components/Works';
import Skills from '../components/Skills';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import Branding from '../components/Branding';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <>
      <Header />
      <Branding />
      <About />
      <Services />
      <Wrapper />
      <Skills />
      <Testimonial />
      <Works />
      <Blog />
    </>
  );
};

export default Home;
