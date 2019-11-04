import React from 'react';
import ReusableButton from '../button';


const SignForm = ({ classes, ...props }) => {
    const { title, children, btnTwoTo, btnTwoLabel, btnTwoText } = props;

    return (
        <div className="sign-form d-flex flex-column align-items-start">
            <h3>{title}</h3>

            {children}

            <p className="font-size-bg font-weight-bold my-2 mx-md-0 mx-auto">or</p>

            <ReusableButton
                classes={{
                    btn: `d-flex flex-row-reverse mt-2 px-3 border-0 mx-md-0 mx-auto font-weight-md ${classes.btnTwo}`,
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