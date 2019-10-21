import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const Input = ({ classes, ...props }) => {
    const { prepend, as, type, name, onChange, placeholder, controlId, required, children, label, labelFor, append } = props;
    
    return (
        <InputGroup className={classes.inputGroup}>
            {
              prepend ? <InputGroup.Prepend className={classes.prepend}>{prepend}</InputGroup.Prepend> : ''         
            }

            <Form.Control
                as={as}
                className={classes.formControl}
                type={type}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                id={controlId}
                required={required}
            >
                {children}
            </Form.Control>
            <label className={classes.label} htmlFor={labelFor}>{label}</label>
            {
                append ? <InputGroup.Append className={classes.append}>{append}</InputGroup.Append> : ''     
            }

        </InputGroup>
    );
}

export default Input;

/*
the component implementation in parent:


<Input
    classes={{
        inputGroup: ''
        formControl: '',
        label: '',
        prepend: '',
        append: ''
    }}
    controlId=""
    type=""
    name=""
    label=""
    labelFor=""
    prepend=""
    placeholder=""
    append=""
/>


*/
