import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ReusableButton from '../../../reusable/button';
import SignFormGroup from '../../../reusable/sign_form/signFormGroup';


const SignUpFormBody = () => {
    
    const formFields = [
        {
            classes: {
                formControl: '',
                label: '',
                prepend: 'fas fa-user',
            },
            controlId: 'sign-up-email',
            type: 'email',
            name: 'sign_up_email',
            label: 'email',
            labelFor: 'sign-up-email',
            placeholder: 'Enter Your Email',
            required: true
        },
        {
            classes: {
                formControl: '',
                label: '',
                prepend: 'fas fa-user',
            },
            controlId: 'sign-up-name',
            type: 'text',
            name: 'sign_up_name',
            label: 'name',
            labelFor: 'sign-up-name',
            placeholder: 'Enter Your Name',
            required: true
        },
        {
            classes: {
                formControl: '',
                label: '',
                prepend: 'fas fa-key',
            },
            controlId: 'sign-up-password',
            type: 'password',
            name: 'sign_up_password',
            label: 'password',
            labelFor: 'sign-up-password',
            placeholder: 'Password',
            required: true
        },
        {
            classes: {
                formControl: '',
                label: '',
                prepend: 'fas fa-key',
            },
            controlId: 'password-confirm',
            type: 'password',
            name: 'password_confirm',
            label: 'password',
            labelFor: 'password-confirm',
            placeholder: 'Re-Password',
            required: true
        },
        {
            classes: {
                formControl: 'form-checkbox agree-checkbox d-none',
                label: 'form-checkbox-label d-block font-size-md mt-4 mb-0',
                prepend: 'checkbox-prepend',
            },
            controlId: 'form-checkbox',
            type: 'checkbox',
            name: 'agree_checkbox',
            label: 'I agree to the terms of application',
            labelFor: 'form-checkbox',
            required: true
        },
    ]

    return (
        <Form className="sign-up-form d-flex flex-md-row flex-column flex-wrap mt-4">
            <Row>
                {
                    formFields.map((f, index) => {
                        return (
                             <Col key={index} md={6} className="mt-4">
                                <SignFormGroup 
                                    classes={f.classes}
                                    controlId={f.controlId}
                                    type={f.type}
                                    name={f.name}
                                    label={f.label}
                                    labelFor={f.labelFor}
                                    placeholder={f.placeholder}
                                    required={f.required}
                                />
                             </Col>
                        );
                    })
                }
                <a href="#" className="form-link">Microsoft Terms</a>
            </Row>
            <ReusableButton
                classes={{
                    btn: 'form-btn bg-success mt-5 mx-md-0 mx-auto border-0'
                }}
                to="#"
                type="submit"
                label="sign up"
                text="Sign Up Now !"
            />
        </Form>
    );
}

export default SignUpFormBody;
