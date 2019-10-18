import React from 'react';
import ReusableButton from '../button';


const SignForm = ({classes, ...props}) => {
    const { btnOneTo, btnOneLabel, btnOneLabel,  btnTwoTo, btnTwoLabel, btnOneText } = props;
    return (
        <div className="sign-form">
            <h2>{props.title}</h2>

            {props.children}

            <ReusableButton
                classes={{
                    btn: classes.btnOne,
                }}
                to={btnOneTo}
                label={btnOneLabel}
                type="submit"
                text={btnOneText}
            />
            <ReusableButton
                classes={{
                    btn: classes.btnTwo,
                    icon: 'fab fa-facebook'
                }}
                to={btnTwoTo}
                label={btnTwoLabel}
                text={btnTwoText}
            />
        </div>
    );
}

export default SignForm;