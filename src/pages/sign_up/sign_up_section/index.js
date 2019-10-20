import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SignForm from '../../../reusable/sign_form/signForm';
import SignFormMessage from '../../../reusable/sign_form/signFormMessage';
import SignUpFormBody from './signUpFormBody';


const SignUpSection = () => {
    return (
        <section className="section sign-up-section bg-primary">
            <Container className="p-5 bg-primary">
                <Row className="p-5 bg-light">
                    <Col xl={8}>
                        <SignForm
                            classes={{
                                btnTwo: 'form-btn',
                            }}
                            btnTwoTo="#"
                            btnTwoLabel="sign up with facebook"
                            btnTwoText="Sign Up With Facebook"
                            title="Sign Up Now !"
                        >
                            <SignUpFormBody />
                        </SignForm>
                    </Col>
                    <Col xl={4}>
                        <SignFormMessage
                            messageText="Do you have an account already ?"
                            to="/sign_in"
                            linkText="Log In Now"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SignUpSection;