import React from 'react';
import Contacts from '../../reusable/contacts';
import Intro from '../../reusable/intro';
import Header from './../../reusable/demoheader';
import Footer from './../../reusable/footer';
import SignInSection from './sign_in_section';


const SignIn = () => {
    return (
       <>
        <Header />
        <Intro />
        <SignInSection />
        <Contacts />
        <Footer />
       </>
    );
}

export default SignIn;