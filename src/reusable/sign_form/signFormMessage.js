import React from 'react';
import images from './../../images';



const SignFormMessage = (props) => {
    const { messageText, to, linkText} = props;

    return (
        <div className="sign-form-message text-center mt-lg-0 mt-5">
            <img src={images.shield} alt="shield"/>
            <p className="mt-3">{messageText}</p>
            <a href={to} className="form-link">{linkText}</a>
        </div>
    );
}

export default SignFormMessage;



