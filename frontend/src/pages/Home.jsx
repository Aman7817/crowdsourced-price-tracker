import React from 'react';
import Layout from "../components/layout/Layout"; 
import Navbar from "../components/layout/Navbar/Navbar";    
import HeroSection from '../components/sections/HeroSection/HeroSection'; 
import Footer from '../components/layout/Footer/Footer';
import HowItWorks from '../components/sections/HowItWorks/HowItWorks';
import WhyChooseUs from '../components/sections/WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <Layout>
      
      <HeroSection />
      <HowItWorks/>
      <WhyChooseUs/>
    </Layout>
  );
};

export default Home;