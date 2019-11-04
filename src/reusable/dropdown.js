import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ReusableDropdown = ({classes, ...props}) => {
   const { togglerAs, togglerId, variant, togglerText, menuAs, children } = props;
    return(
        <Dropdown>
            <Dropdown.Toggle 
                as={togglerAs}
                id={togglerId} 
                variant={variant} 
                className={`dropdown-toggler ${classes.toggler}`}
            >
                {togglerText}
            </Dropdown.Toggle>
            <Dropdown.Menu 
                as={menuAs}
                className={`dropdown-menu ${classes.menu}`}
            >
                {children}
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