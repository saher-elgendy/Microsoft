import React from 'react';
import UserPanelItem from './userPanelItem';

const UserPanel = () => {
    const icons = ['shopping-cart', 'search', 'user'];
    return (
        <div className="user-panel d-flex align-items-center mb-xl-0 mb-4">
            <div className="user-panel-container">
                <ul className="d-flex justify-content-between">
                    {icons.map((icon, index) => {
                        return (
                            icon === 'shopping-cart' ?
                                <UserPanelItem icon={icon} key={index}>
                                    <span className="text-primary">0</span>
                                </UserPanelItem> :
                                <UserPanelItem icon={icon} key={index} />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default UserPanel;