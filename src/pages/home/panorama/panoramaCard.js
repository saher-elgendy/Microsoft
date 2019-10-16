import React from 'react';
import images from './../../../images';
import ReusableButton from './../../../reusable/button';



const PanoramaCard = () => {
    const shopTools = [
        {
            icon: 'fas fa-search',
            title: 'Search'
        },
        {
            icon: 'fas fa-dice-six',
            title: 'Sections'
        },
        {
            icon: 'fas fa-building',
            title: 'Floor'
        }
    ];


    return (
        <div className="panorama-card border p-3">  
            {/* panorama card top part (floor number)*/}
            <div className="panorama-card-top d-flex nowrap">
                <img src={images.logoWhite} alt="white_microsoft_logo" className="panorama-card-logo" />
                <span className="ml-5 font-size-sm">Floor Number 1</span>
            </div>
            {/* panorama card middle part (open-close time)*/}
            <div className="panorama-card-mid mt-lg-4 mt-1">
                <h2 className="text-white font-size-bg font-weight-normal mb-0">Microsoft Entrance</h2>
                <p className="font-size-sm mb-lg-auto mb-0">open 12:30PM - closed 12:30AM</p>
            </div>
            {/* panorama card bottom part (shop tools)*/}
            <div className="panorama-card-bottom mt-lg-4 mt-2">
                <h2 className="font-size-bg text-white mb-3">Shop Tools</h2>
                <ul className="shop-tools d-flex justify-content-between">
                    {
                        shopTools.map((t, index) => {
                            return (
                                <li className="text-center" key={index}>
                                    <ReusableButton
                                        classes={{
                                            btn: 'panorama-btn bg-dark text-white border-0',
                                            icon: `${t.icon}`
                                        }}
                                        label={t.title}
                                    />
                                    <span className="text-white d-block">{t.title}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

        </div>

    );
}
export default PanoramaCard;

