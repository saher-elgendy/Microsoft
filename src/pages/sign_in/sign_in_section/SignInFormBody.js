import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ReusableButton from './../../../reusable/button';
import SignFormGroup from './../../../reusable/sign_form/signFormGroup';



const SignInFormBody = () => {
    
    const formFields = [
        {
            classes: {
                fomtControl: 'sign-in-control',
                label: 'd-none',
                prepend: 'fas fa-user'
            },
            controlId: 'sign-in-email',
            type: 'email',
            name: 'sign_in_email',
            label: 'email',
            labelFor: 'sign-in-email',
            placeholder: 'Enter Your Email',
            required: true

        },
        {
            classes: {
                fomtControl: 'sign-in-control',
                label: 'd-none',
                prepend: 'fas fa-key'
            },
            controlId: 'sign-in-password',
            type: 'password',
            name: 'sign_in_password',
            label: 'password',
            labelFor: 'sign-in-password',
            placeholder: 'Enter Your Password',
            required: true

        },
        {
            classes: {
                formControl: 'form-checkbox remember-checkbox d-none',
                label: 'form-checkbox-label remember-checkbox-label d-block font-size-md mb-0 mt-5',
                prepend: 'checkbox-prepend'
            },
            controlId: 'form-checkbox',
            type: 'checkbox',
            name: 'remember_checkbox',
            label: 'Remember Me',
            labelFor: 'form-checkbox',
            required: true
        },
    ];

    return (
        <Form className="sign-in-form d-flex flex-md-row flex-column align-items-center flex-wrap mt-4">
            <Row>
                {
                    formFields.map((f, index) => {
                        return (
                            <Col md={6} className="mt-md-0 mt-4">
                                <SignFormGroup
                                    key={index}
                                    classes={f.classes}
                                    controlId={f.controlId}
                                    type={f.type}
                                    name={f.name}
                                    label={f.label}
                                    labelFor={f.controlId}
                                    placeholder={f.placeholder}
                                    required={true}
                                />
                            </Col>
                        );
                    })
                }

                <a href="#" className="form-link ml-md-auto">Forgot Your Password</a>
            </Row>

            <ReusableButton
                classes={{
                    btn: 'form-btn bg-success border-0 mt-5'
                }}
                to="#"
                type="submit"
                label="log in"
                text="Log Into My Account Now"
            />
        </Form>
    );
}

export default SignInFormBody;

