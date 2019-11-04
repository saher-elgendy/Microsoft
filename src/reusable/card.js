import React from 'react';
import { Card } from 'react-bootstrap';
import ReusableButton from './button';

const ReusableCard = ({ classes, ...props }) => {
    const { image, alt, title, children, btnLabel, btnText, onBtnClick } = props;

    return (
        <Card className={classes.card}>
            <img src={image} alt={alt} className={classes.image}/>
            <Card.Body className={classes.cardBody}>
                <Card.Title className={classes.title}>{title}</Card.Title>
                {children}
                <ReusableButton
                    classes={{
                        btn: classes.btn,
                        icon: classes.btnIcon
                    }}
                    label={btnLabel}
                    text={btnText}
                    onClick={onBtnClick}
                />
            </Card.Body>
        </Card>
    );
}

export default ReusableCard;

/*
Component implementation in parent: 

<ReusableCard
    classes={{
        card: '',
        image: '',
        cardBody: '',
        title: '',
        btn: '',
        btnIcon: ''
    }}
    image={}
    alt=""
    title={}
    btnLabel=""
    btnText=""
    onBtnClick={}
>
</ReusableCard>
*/

