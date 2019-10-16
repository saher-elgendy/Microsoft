import React from 'react';
import { Card } from 'react-bootstrap';
import ReusableButton from './button';

const ReusableCard = ({ classes, ...props }) => {
    return (
        <Card className={classes.card}>
            <img src={props.image} alt={props.alt} className={classes.image}/>
            <Card.Body className={classes.cardBody}>
                <Card.Title className={classes.title}>{props.title}</Card.Title>
                {props.children}
                <ReusableButton
                    classes={{
                        btn: classes.btn,
                        icon: classes.btnIcon
                    }}
                    label={props.btnLabel}
                    text={props.btnText}
                    onClick={props.onBtnClick}
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

