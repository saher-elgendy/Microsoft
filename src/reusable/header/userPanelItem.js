import React from 'react';

const UserPanelItem = (props) => {
    return (
        <li className="user-panel-item ml-xl-5">
            <i className={`fa fa-${props.icon} fa-lg`} aria-hidden="true"></i>
            {props.children}
        </li>
    );
}

export default UserPanelItem;