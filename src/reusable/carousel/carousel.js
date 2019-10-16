import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import { CarouselProvider } from './carouselContext';


const ReusableCarousel = ({classes, ...props}) => {
    return (
        <Carousel className={classes.carousel}>
            {props.items.map((item, index) => {
                return (
                    <Carousel.Item key={index} className={classes.carouselItem}>
                        <Row className={classes.carouselItemRow}>
                            {/* {React.cloneElement(props.children, { item })} */}
                            {
                              <CarouselProvider value={item}>
                                  {props.children}
                              </CarouselProvider>
                            }
                        </Row>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default ReusableCarousel;