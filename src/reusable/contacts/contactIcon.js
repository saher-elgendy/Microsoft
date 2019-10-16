import React from 'react';

const ContactIcon = (props) => {
    return (
        <li className="contact-icon ml-2 text-white d-flex justify-content-center align-items-center">
            <a href="#">
                <i className={props.icon} aria-hidden="true"></i>
            </a>
        </li>
    );
}

export default ContactIcon;