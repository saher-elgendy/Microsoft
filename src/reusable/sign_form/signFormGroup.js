import React from 'react';
import { FormGroup } from 'react-bootstrap';
import Input from '../input';



const SignFormGroup = ({classes, ...props}) => {
    const { controlId, type, name, label, labelFor, placeholder, required} = props;
    const { formControl, prepend } = classes;

    return (
        <FormGroup className="mb-0">
            <Input
                classes={{
                    formControl: `sign-control border-left-0 px-2 ${formControl}`,
                    label: `d-none ${classes.label}`,
                    prepend: ` d-flex justify-content-center align-items-center px-3 bg-white ${prepend}`,
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