import React from 'react';

const ReusableButton = ({ classes, ...props }) => {
    //if no type prop, set type to 'button
    props.type = props.type || 'button';
    //button not always contains an icon, instead it can contain any other elements
    props.children = classes.icon ? <i className={classes.icon} aria-hidden="true"></i> : props.children;

    return (
        //if the button has the prop 'to' it should be a link instead it is a button
        props.to ?
            <a
                href={props.to}
                className={`btn btn-primary py-2 ${classes.btn}`}
                onClick={props.onClick}
            >
                {props.children}
                {props.text}

            </a> :
            <button
                className={`btn btn-primary py-2 ${classes.btn}`}
                aria-label={props.label}
                type={props.type}
                onClick={props.onClick}
            >
                {props.children}
                {props.text}
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

