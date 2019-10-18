import React from 'react';
import Contacts from '../../reusable/contacts';
import Intro from '../../reusable/intro';
import Footer from './../../reusable/footer/index';
import Home from './../home/index';
import SignIn from './index';



const SignIn = () => {
    return (
       <>
        <Home />
        <Intro />
        <Contacts />
        <SignIn />
        <Footer />
       </>
    );
}

export default SignIn;