import React from 'react';

const List = ({ classes, ...props }) => {
  return (
    <ul className={classes.list}>
      {
        props.items.map((item, index) => {
          return (
            <li key={index} className={classes.listItem}>
              {item}
            </li>
          );
        })
      }
    </ul>
  );
}

export default List;