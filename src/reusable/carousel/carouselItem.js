import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import ReusableCard from '../../reusable/card';
import Price from '../../reusable/price';
import CarouselContext from './carouselContext';



const CarouselItem = ({classes, ...props}) => {
    const item = useContext(CarouselContext);
    const { btnLabel, btnText } = props;
    const { colClasses, cardClasses, titleClasses, btnClasses, btnIconClasses } = classes;

    return (
        <>
            {
                item.map((col, index) => {
                    const { xl, lg, md, bg, direction, image, title, newPrice, originalPrice } = col;

                    return (
                        <Col
                            //a single carousel item columns can have equal widths or not
                            //if columns width in a single carousel item  is not consistent, use the value
                            //provided by the relevant objects, if consistent use the default values 3(xl), 4(lg), 6(md)
                            key={index}
                            xl={xl ? xl : 3}
                            lg={lg ? lg : 4}
                            md={md ? md : 6}
                            className={`${colClasses} flex-grow-1`}
                        >
                            <ReusableCard
                                classes={{
                                    card: `${cardClasses} ${bg ? `bg-${bg}` : ''} ${direction ? `flex-xl-${direction}` : ''} flex-column justify-content-end h-100`,
                                    image: 'card-image',
                                    cardBody: 'flex-grow-0',
                                    title: `${titleClasses}`,
                                    btn: `${btnClasses}`,
                                    btnIcon: btnIconClasses ? btnIconClasses : ''
                                }}
                                image={image}
                                alt={`${title}_image`}
                                title={title}
                                btnLabel={btnLabel}
                                btnText={btnText}
                            >
                                {
                                    // not always carousel cards are product cards
                                    //this check adds the price if only the carousel show products cards
                                    col.newPrice ? <Price
                                        classes={{
                                            originalPrice: 'font-weight-md',
                                            newPrice: 'font-size-xl font-weight-bg text-primary'
                                        }}
                                        newPrice={newPrice}
                                        originalPrice={originalPrice}
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