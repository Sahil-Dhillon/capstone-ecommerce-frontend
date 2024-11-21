import React from 'react';
import Banner from '../../components/Home/Banner';
import CategorySection from '../../components/Home/CategoriesSection';
import ImageHero from '../../components/Home/ImageGallery';
import TextBanner from '../../components/Home/TextBanner';
import ProductCarousel from '../../components/Home/ProductCarousel';


const Home = () => {
    return <>
    <Banner />
    <CategorySection />
    <ImageHero/>
    <TextBanner/>
    <ProductCarousel/>
    </>
};

export default Home;