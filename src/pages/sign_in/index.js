import React from 'react';
import Contacts from '../../reusable/contacts';
import Intro from '../../reusable/intro';
import Header from './../../reusable/demoheader';
import Footer from './../../reusable/footer';
import SignInForm from './signInForm';


const SignIn = () => {
    return (
       <>
        <Header />
        <Intro />
        <SignInForm />
        <Contacts />
        <Footer />
       </>
    );
}

export default SignIn;