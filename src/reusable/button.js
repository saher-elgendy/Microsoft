import React from 'react';

const ReusableButton = ({ classes, ...props }) => {
    //if no type prop, set type to 'button
    let type = props.type;
    type = type || 'button';
    //button not always contains an icon, instead it can contain any other elements 
    //or may only have a text
    let children = props.children;
    children = classes.icon ? <i className={classes.icon} aria-hidden="true"></i> : children;

    const { to, onClick, text, label } = props

    return (
        //if the button has the prop 'to' it should be a link
        //if there is no defined 'to' prop it is a normal button
        to ?
            <a
                href={to}
                className={`btn btn-primary py-2 ${classes.btn}`}
                onClick={onClick}
            >
                {children}
                {text}

            </a> :
            <button
                className={`btn btn-primary py-2 ${classes.btn}`}
                aria-label={label}
                type={type}
                onClick={onClick}
            >
                {children}
                {text}
            </button>
    )
}

export default ReusableButton;

/*component implementation in parent:

<ReusableButton
    classes={{
        btn: '',
        icon: ''
    }}
    to=""
    label=""
    type=""
    text=""
>
</ReusableButton >

*/

