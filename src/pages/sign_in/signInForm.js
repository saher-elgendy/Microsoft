import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import SignFormMessage from '../../reusable/sign_form/signFormMessage';


const SignInForm = () => {
    return (
        <section className="section sign-in-section py-sm-0 py-4 bg-primary">
            <Container className="py-5 bg-white">
                <Row >
                    <Col xl={8}>
                        <Form>


                        </Form>
                    </Col>

                    <Col xl={4}>
                        <SignFormMessage 
                            messageText="Don't have an account ?"
                            messageLink="Sign Up"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SignInForm;