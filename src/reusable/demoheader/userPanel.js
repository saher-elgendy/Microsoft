import React from 'react';
import List from '../list';

const UserPanel = (props) => {
    const { userPanelItems } = props;

    return (
        <div className="user-panel">
            <List
                classes={{
                    list: 'user-panel-items d-flex',
                    listItem: 'user-panel-item ml-2 p-3'  
                }}
                items={userPanelItems}
            />
        </div>
    );
}

export default UserPanel;