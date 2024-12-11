import React, { useEffect, useState } from 'react';
import Banner from '../../components/Home/Banner';
import CategorySection from '../../components/Home/CategoriesSection';
import ImageHero from '../../components/Home/ImageGallery';
import TextBanner from '../../components/Home/TextBanner';
import ProductCarousel from '../../components/Home/ProductCarousel';
import axios from 'axios';


const Home = () => {
    
    
    return <>
    <Banner />
    <CategorySection />
    <ImageHero/>
    <TextBanner/>
    <ProductCarousel title="Featured Products" autoScroll={true}/>
    </>
};

export default Home;