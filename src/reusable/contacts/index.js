import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import images from './../../images';
import ReusableButton from './../button';
import Input from './../input';
import ContactIcon from './contactIcon';
import './index.css';
import ServicesCol from './servicesCol';


const Contacts = () => {
    const icons = ['fab fa-vimeo-v', 'fab fa-twitter', 'fab fa-facebook-f'];

    const services = [
        ['Lighting', 'Plugs', 'Cameras', 'Door Locks', 'Thermostats', 'TV & Video'],
        ['Lighting', 'Plugs', 'Cameras', 'Door Locks', 'Thermostats', 'TV & Video'],
        ['Lighting', 'Plugs', 'Cameras', 'Door Locks', 'Thermostats', 'TV & Video'],
        ['Lighting', 'Plugs', 'Cameras', 'Door Locks', 'Thermostats', 'TV & Video'],
        ['Lighting', 'Plugs', 'Cameras', 'Door Locks', 'Thermostats', 'TV & Video'],
        ['Lighting', 'Plugs', 'Cameras', 'Door Locks', 'Thermostats', 'TV & Video'],
        ['Lighting', 'Plugs', 'Cameras', 'Door Locks', 'Thermostats', 'TV & Video'],
        ['Lighting', 'Plugs', 'Cameras', 'Door Locks', 'Thermostats', 'TV & Video'],
    ]

    return (
        <section className="section contact-section border-bottom bg-light py-sm-0 py-4">
            <Container className="py-5">
                <p className="font-size-md font-weight-md">join to our new settler</p>
                <Row >
                    <Col lg={9}>
                        <Input
                            classes={{
                                label: 'd-none',
                                prepend: 'px-3 d-flex justify-content-center align-items-center text-primary font-size-bg',
                                formControl: 'border-left-0 p-4',
                                append: ''
                            }}
                            controlId="subscribe-email"
                            name="email"
                            type="email"
                            label="email address"
                            labelFor="subscribe-email"
                            prepend="@"
                            placeholder="Enter Your Email"
                        />
                        <ReusableButton
                            classes={{
                                btn: 'subscribe-btn',
                            }}
                            to="#"
                            label="subscribe"
                            type="submit"
                            text="subscribe"
                        ></ReusableButton>
                    </Col>
                    <Col lg={3} className="d-flex align-items-end pl-0 justify-content-lg-start justify-content-center mt-lg-0 mt-4">
                        <ul className="contact-icons-list d-flex">
                            {
                                icons.map((icon, index) => {
                                    return (
                                        <ContactIcon key={index} icon={icon} />
                                    );
                                })
                            }
                        </ul>
                    </Col>
                </Row>

                <img src={images.logo} alt="microsoft_logo" className="logo" />

                <Row className="justify-content-between flex-wrap">
                    {
                        services.map((col, index) => {
                            return (
                                <ServicesCol key={index} items={col}/>
                            );
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}

export default Contacts;