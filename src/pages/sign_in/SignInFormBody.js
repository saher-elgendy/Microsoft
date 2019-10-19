import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ReusableButton from './../../reusable/button';
import SignFormGroup from './../../reusable/sign_form/signFormGroup';



const SignInFormBody = () => {

    const formFields = [
        {
            classes: {
                fomtControl: 'sign-in-control',
                label: 'd-none',
                prepend: 'fas fa-user d-flex justify-content-center align-items-center'
            },
            controlId: 'sign-in-email',
            type: 'email',
            name: 'sign_in_email',
            label: 'email',
            placeholder: 'Enter Your Email'

        },
        {
            classes: {
                fomtControl: 'sign-in-control',
                label: 'd-none',
                prepend: 'fas fa-key d-flex justify-content-center align-items-center'
            },
            controlId: 'sign-in-password',
            type: 'password',
            name: 'sign_in_password',
            label: 'password',
            placeholder: 'Enter Your Password'

        },
        {
            classes: {
                formControl: 'remember-checkbox d-none',
                label: 'remember-checkbox-label font-size-md mb-0',
                prepend: 'd-none'
            },
            controlId: 'remember-checkbox',
            type: 'checkbox',
            name: 'remember_checkbox',
            label: 'Remember Me',
        },
    ];

    return (
        <Form className="d-flex flex-md-row flex-column flex-wrap flex-grow-1 mt-4 align-items-center">
            <Row >
                {
                    formFields.map((f, index) => {
                        return (
                            <Col md={6}>
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
                <div className="d-flex align-items-center justify-content-md-end justify-content-center flex-grow-1 px-3">
                    <a href="#" className="form-link">Forgot Your Password</a>
                </div>
            </Row>

            <ReusableButton
                classes={{
                    btn: 'form-btn bg-success mt-5 border-0'
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


{/* <FormGroup>
            <Input
                classes={{
                    formControl: classes.formControl,
                    label: classes.label,
                    prepend: classes.prepend,
                }}
                controlId={controlId}
                type={type}
                name={name}
                label={label}
                labelFor={labelFor}
                prepend={prepend}
                placeholder={placeholder}
            />
        </FormGroup> */}