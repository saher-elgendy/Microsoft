import React from 'react';
import Contacts from '../../reusable/contacts';
import Header from '../../reusable/demoheader';
import Intro from '../../reusable/intro';
import images from './../../images';
import Footer from './../../reusable/footer/index';
import AllCategories from './allCategories';
import './index.css';


const Categories = () => {
    const categories = [
        {
            articleTitle: 'Laptop',
            articleText: `Style and speed. Go beyond the traditional with new Surface Laptop 2. Featuring improved
                          performance and the full Windows 10 Home experience, slip it in your bag and make every day more productive.`,
            image: images.laptop,
        },
        {
            articleTitle: 'Mobile',
            articleText: `Ultra-light and versatile. Get productive your way with the Surface Pro 6 — now faster than 
                          ever with the latest 8th Generation Intel® Core™ processor and the full Windows 10 Home experience.`,
            image: images.mobile,
        },
        {

            articleTitle: 'Surface Mouse',
            articleText: `Light, portable, ergonomic mouse is perfect for precise navigation on the go, 
                          no cords or dongle — connects wirelessly to your Surface via Bluetooth`,
            image: images.mouse,
        },
        {
            articleTitle: 'Tablet',
            articleText: `More power for your ideas
                         Professional. Student. Creator. Whatever you do, let next-generation Surface Pro 6, featuring the latest 
                         8th Generation Intel Core processor and all-day battery life, help you take your ideas to the next level.`,
            image: images.tablet2,
        },
        {
            articleTitle: 'OS',
            articleText: `Windows is now faster, secure and more reliable than ever, now, you can enjoy features that could
             genuinely save you time and frustration as well as keep your computer protected.`,
            image: images.windows,
        },
        {
            articleTitle: 'App',
            articleText: `Now, you can do many stuffs using one editor, IntelliSense, Debugging, Built-in Git, Extensions, all 
            from Visual Studio Code, free, Built on open source, runs everywhere.`,
            image: images.visualStudio

        },
    ];
    return (
        <>
            <Header />
            <Intro />
            <AllCategories categories={categories}/>
            <Contacts />
            <Footer />
        </>

    );
}

export default Categories;