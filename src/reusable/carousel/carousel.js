import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import { CarouselProvider } from './carouselContext';


const ReusableCarousel = ({classes, ...props}) => {
    const { items, children } = props;
    
    return (
        <Carousel className={classes.carousel}>
            {items.map((item, index) => {
                return (
                    <Carousel.Item key={index} className={classes.carouselItem}>
                        <Row className={classes.carouselItemRow}>
                            {/* {React.cloneElement(children, { item })} */}
                            {
                              <CarouselProvider value={item}>
                                  {children}
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