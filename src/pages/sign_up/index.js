import React from 'react';
import Contacts from '../../reusable/contacts';
import Header from '../../reusable/demoheader';
import Footer from '../../reusable/footer';
import Intro from '../../reusable/intro';
import SignUpSection from './sign_up_section/index';


const SignUp = () => {
    return (
        <>
            <Header />
            <Intro />
            <Contacts />
            <SignUpSection />
            <Footer />
        </>
    );
}

export default SignUp;