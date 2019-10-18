import React from 'react';
import images from './../../images';



const SignFormMessage = (props) => {
    return (
        <div className="sign-form-message text-center">
            <img src={images.shield} alt="shield"/>
            <p className="mt-3">{props.messageText}</p>
            <a href="#">{props.messageLink}</a>
        </div>
    );
}

export default SignFormMessage;