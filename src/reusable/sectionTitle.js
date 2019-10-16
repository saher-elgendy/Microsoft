import React from 'react';

const SectionTitle = ({ classes, ...props }) => {
    return (
        <div className={`section-title d-flex flex-column ${classes.container}`}>
            <h2 className={classes.title}>{props.title}</h2>
            <p className={classes.text}>{props.text}</p>
        </div>
    );
}


export default SectionTitle;

/* component implementation in parent
   <SectionTitle
        classes={{
            container: '',
            title: '',
            text: ''
        }}
        title=''
        text=''
    />
*/