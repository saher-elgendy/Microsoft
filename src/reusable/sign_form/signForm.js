import React from 'react';
import ReusableButton from '../button';


const SignForm = ({ classes, ...props }) => {
    const { btnTwoTo, btnTwoLabel, btnTwoText } = props;

    return (
        <div className="sign-form d-flex flex-column align-items-start">
            <h4>{props.title}</h4>

            {props.children}

            <p className="font-size-bg font-weight-bold my-2 mx-lg-0 mx-auto">or</p>

            <ReusableButton
                classes={{
                    btn: classes.btnTwo,
                    icon: 'fab fa-facebook-f ml-2 bg-white text-primary p-1'
                }}
                to={btnTwoTo}
                label={btnTwoLabel}
                text={btnTwoText}
            />
        </div>

    );

}

export default SignForm;