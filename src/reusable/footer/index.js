import React from 'react';
import { Container } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="footer font-weight-md">
            <Container className="flex-md-row flex-column justify-content-md-between justify-content-center align-items-center py-3">
                <p className="mb-0">&copy; Copyright 2019 All Right Reserved</p>
                <p className="mb-0">Powered By Saher Elgendy</p>
            </Container>
        </div>
    );
}

export default Footer;