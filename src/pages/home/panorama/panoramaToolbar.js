import React from 'react';
import ReusableButton from './../../../reusable/button';


const PanoramaToolbar = () => {
    const toolbarTools = [
        {
            icon: 'fas fa-search-plus',
            label: 'zoom in'
        },
        {
            icon: 'fas fa-search-minus',
            label: 'zoom out'
        },
        {
            icon: 'fas fa-arrows-alt',
            label: 'full screen'
        }
    ];
    
 
    return (
        <div className="panorama-toolbar">
            <ul className="d-flex">
                {
                    toolbarTools.map((t, index) => {
                        return (
                            <li key={index}>
                                <ReusableButton 
                                    classes={{
                                        btn: 'panorama-btn bg-dark mr-3',
                                        icon: `${t.icon}`
                                    }}
                                    label={t.label}
                                />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    ); 
}

export default PanoramaToolbar;