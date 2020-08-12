import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecordRounded';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertCommentRounded';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Faculty of Engineering</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Yomna Raouf
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title={'Threads'} />
            <SidebarOption  title={'Threads'} />
            
            
        </div>
    )
}

export default Sidebar
