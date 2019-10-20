import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SignForm from './../../../reusable/sign_form/signForm';
import SignFormMessage from './../../../reusable/sign_form/signFormMessage';
import './index.css';
import SignInFormBody from './SignInFormBody';



const SignInSection = () => {

    return (
        <section className="section sign-in-section py-sm-0 py-4 bg-primary">
            <Container className="p-5 bg-primary">
                    <Row className="p-5 bg-light">
                        <Col  lg={8}>
                            <SignForm
                                classes={{
                                    btnTwo: 'form-btn'
                                }}
                                btnTwoTo="#"
                                btnTwoLabel="sign in with facebook"
                                btnTwoText="Sign In With Facebook"
                                title="Sign in now!"
                            >
                                <SignInFormBody />
                            </SignForm>
                        </Col>

                        <Col lg={4}>
                            <SignFormMessage
                                messageText="Don't have an account ?"
                                to="/sign_up"
                                linkText="Sign Up"
                            />
                        </Col>
                    </Row>
            </Container>
        </section>
    );
}

export default SignInSection;