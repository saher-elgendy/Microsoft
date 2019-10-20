import React from 'react';
import { FormGroup } from 'react-bootstrap';
import Input from '../input';



const SignFormGroup = ({classes, ...props}) => {
    const { controlId, type, name, label, labelFor, placeholder, required} = props;

    return (
        <FormGroup>
            <Input
                classes={{
                    formControl: `sign-control border-left-0 px-2 ${classes.formControl}`,
                    label: `${classes.label}`,
                    prepend: `px-3 ${classes.prepend}`,
                }}
                controlId={controlId}
                type={type}
                name={name}
                label={label}
                labelFor={labelFor}
                prepend={<i></i>}
                placeholder={placeholder}
                required={required}
            />
        </FormGroup>
    );
}

export default SignFormGroup;