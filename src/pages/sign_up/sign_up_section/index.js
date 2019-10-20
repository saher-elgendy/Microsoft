import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SignFormMessage from '../../../reusable/sign_form/signFormMessage';


const SignUpSection = () => {
    return (
        <section className="section sign-up-section">
            <Container className="p-5">
                <Row className="p-5 bg-primary">
                    <Col xl={8}>

                    </Col>
                    <Col xl={4}>
                        <SignFormMessage />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SignUpSection;