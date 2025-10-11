import React from 'react';
import Layout from "../components/layout/Layout"; 
import Navbar from "../components/layout/Navbar/Navbar";    
import HeroSection from '../components/sections/HeroSection/HeroSection'; 
import Footer from '../components/layout/Footer/Footer';

const Home = () => {
  return (
    <Layout>
      
      <HeroSection />
    </Layout>
  );
};

export default Home;