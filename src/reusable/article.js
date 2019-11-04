import React from 'react';

const Article = ({classes, ...props}) => {
    const { title, text } = props;
    
    return (
        <article className={`${classes.article}`}>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.text}>{text}</p>
        </article>
    );
}


export default Article;

/*

Component implementation in parent:

<Article
    classes={{
        article: '',
        title: '',
        text: ''
    }}
    title=""
    text=""
/>
*/