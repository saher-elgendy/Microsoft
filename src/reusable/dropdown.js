import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ReusableDropdown = ({classes, ...props}) => {
    console.log(props)
    return(
        <Dropdown>
            <Dropdown.Toggle 
                as={props.togglerAs}
                id={props.togglerId} 
                variant={props.variant} 
                className={`dropdown-toggler ${classes.toggler}`}
            >
                {props.togglerText}
            </Dropdown.Toggle>
            <Dropdown.Menu 
                as={props.menuAs}
                className={`dropdown-menu ${classes.menu}`}
            >
                {props.children}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ReusableDropdown;


/* component implementation in the parent
  <ReusableDropdown
    classes={{
        toggler: '',
        menu: ''
    }}
    togglerAs=""
    menuAs=""
    togglerId=""
    variant=""
    togglerText=""
  >
  children
  </ReusableDropdown>
*/