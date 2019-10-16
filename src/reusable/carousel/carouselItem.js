import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import ReusableCard from '../../reusable/card';
import Price from '../../reusable/price';
import CarouselContext from './carouselContext';



const CarouselItem = (props) => {
    const item = useContext(CarouselContext);

    return (
        <>
            {
                item.map((col, index) => {
                    return (
                        <Col
                            key={index}
                            xl={col.xl ? col.xl : 3}
                            lg={col.lg ? col.lg : 4}
                            md={col.md ? col.md : 6}
                            className={`${props.colClasses} flex-grow-1`}
                        >
                            <ReusableCard
                                classes={{
                                    card: `${props.cardClasses} ${col.bg ? `bg-${col.bg}` : ''} ${col.direction ? `flex-xl-${col.direction}` : ''} flex-column justify-content-end h-100`,
                                    image: 'card-image',
                                    cardBody: 'flex-grow-0',
                                    title: `${props.titleClasses}`,
                                    btn: `${props.btnClasses}`,
                                    btnIcon: props.btnIconClasses ? props.btnIconClasses : ''
                                }}
                                image={col.image}
                                alt={`${col.title}_image`}
                                title={col.title}
                                btnLabel={props.btnLabel}
                                btnText={props.btnText}
                            >
                                {
                                    col.newPrice ? <Price
                                        classes={{
                                            originalPrice: 'font-weight-md',
                                            newPrice: 'font-size-xl font-weight-bg text-primary'
                                        }}
                                        newPrice={col.newPrice}
                                        originalPrice={col.originalPrice}
                                    /> : ''
                                }

                            </ReusableCard>
                        </Col>
                    );
                })
            }
        </>
    );
}

export default CarouselItem;