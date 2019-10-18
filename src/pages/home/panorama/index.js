import React from 'react';
import { Container } from 'react-bootstrap';
import images from './../../../images';
import SectionTitle from './../../../reusable/sectionTitle';
import PanoramaContent from './panoramaContent';

const Panorama = () => {
    return (
        <section className="section panorama-section position-relative overflow-hidden bg-light">
            <h2 className="sr-only">panorama section</h2>
            <img src={images.panoramaBadge} alt="360-badge" className="panorama-view360-badge"/>

            <Container className="p-5">
                <SectionTitle
                    classes={{
                        container: 'panorama-section-title-cont flex-column-reverse text-uppercase text-center',
                        title: 'panorama-section-title font-size-xl',
                        text: 'mb-2 font-size-bg'
                    }}
                    title='360-degree Shopping Experience'
                    text='Microsoft New Experience'
                />

                <PanoramaContent />
            </Container>
        </section>
    );
}

export default Panorama;