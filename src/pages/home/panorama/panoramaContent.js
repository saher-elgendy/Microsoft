import React from 'react';
import { Col, Row } from 'react-bootstrap';
import images from './../../../images';
import ReusableButton from './../../../reusable/button';
import PanoramaCard from './panoramaCard';
import PanoramaToolbar from './panoramaToolbar';


const PanoramaContent = () => {
    return (
        <div className="panorama-content position-relative mt-4 text-white">
            <img src={images.panorama} alt="panorama-image" className="panorama-image" />
            <Row className="panorama-content-row p-lg-4 p-2 w-100 h-100 mx-0">

                <Col className="panorama-content-col d-flex flex-column align-items-start justify-content-between">
                    <ReusableButton
                        classes={{
                            btn: 'panorama-btn bg-dark',
                            icon: 'fas fa-cog'
                        }}
                        label="change settings"
                    />
                    <PanoramaCard />
                    <PanoramaToolbar />
                </Col>

                <Col className="panorama-content-col d-flex flex-column justify-content-between align-items-end">
                    <ReusableButton
                        classes={{
                            btn: 'panorama-btn bg-dark',
                            icon: 'fas fa-shopping-cart'
                        }}
                        label="cart"
                    />
                    <ReusableButton 
                        classes={{
                            btn: 'panorama-btn bg-dark',
                            icon: 'fas fa-share-alt'
                        }}
                        label="share"
                    />
                </Col>
                
            </Row>
        </div>
    );
}

export default PanoramaContent;
