import React from 'react';

const Article = ({classes, ...props}) => {
    return (
        <article className={`${classes.article}`}>
            <h2 className={classes.title}>{props.title}</h2>
            <p className={classes.text}>{props.text}</p>
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