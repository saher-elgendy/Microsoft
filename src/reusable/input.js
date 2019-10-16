import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const Input = ({ classes, ...props }) => {

    return (
        <InputGroup className={classes.inputGroup}>
            <InputGroup.Prepend className={classes.prepend}>{props.prepend}</InputGroup.Prepend>

            <Form.Control
                as={props.as}
                className={classes.formControl}
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                placeholder={props.placeholder}
                id={props.controlId}
            >
                {props.children}
            </Form.Control>
            <label className={classes.label} htmlFor={props.labelFor}> {props.label}</label>
            <InputGroup.Append className={classes.append}>{props.append}</InputGroup.Append>
        </InputGroup>
    );
}

export default Input;

/*
the component implementation in parent:


<Input
    classes={{
        label: '',
        prepend: '',
        formControl: '',
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
