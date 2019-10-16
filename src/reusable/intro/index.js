import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import ReusableDropdown from '../dropdown';


const Intro = () => {
    const branches = ['Laptops', 'Mobiles', 'Tablets', 'Accessories', 'Software'];
    return (
        <div className="intro border-bottom">
            <Container className="py-3 d-flex flex-md-row flex-column justify-content-between align-items-center">

                <p className="mb-0">
                    <span className="font-weight-bold">welcome to microsoft,</span>
                    now you can shop by the branch closest to you.
                </p>

                <ReusableDropdown
                    classes={{
                        toggler: 'all-branches-dropdown-toggler mt-md-0 mt-4',
                        menu: 'all-branches-dropdown-menu'
                    }}
                    variant="outline-primary"
                    togglerText="All branches"
                >
                    {branches.map((branch, index) => {
                        return (
                            <Dropdown.Item key={index}>
                                {branch}
                            </Dropdown.Item>
                        );
                    })}
                </ReusableDropdown>
                
            </Container>
        </div>
    );
}

export default Intro;