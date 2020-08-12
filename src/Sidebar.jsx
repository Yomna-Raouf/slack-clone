import React, {useState, useEffect} from 'react';

import SidebarOption from './SidebarOption';

import './Sidebar.css';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecordRounded';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertCommentRounded';
import InboxIcon from '@material-ui/icons/InboxRounded';
import DraftsIcon from '@material-ui/icons/DraftsRounded';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorderRounded';
import PeopleAltIcon from '@material-ui/icons/PeopleAltRounded';
import AppsIcon from '@material-ui/icons/AppsRounded';
import FileCopyIcon from '@material-ui/icons/FileCopyRounded';
import ExpandLessIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import AddIcon from '@material-ui/icons/Add';

import db from './firebase';

function Sidebar() {

    const [channels, setChannels] = useState([]);

    useEffect( () => {
        db.collection('rooms').onSnapshot( snapshot => (
            setChannels(snapshot.docs.map( doc => ({
                    id:doc.id,
                    name: doc.data().name
                }))
            )
        ));
    }, []);

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
            <SidebarOption Icon= {InboxIcon}  title={'Mentions & Reactions'} />
            <SidebarOption Icon= {DraftsIcon}  title={'Saved items'} />
            <SidebarOption Icon= {BookmarkBorderIcon}  title={'channel browser'} />
            <SidebarOption Icon= {PeopleAltIcon}  title={'People & user groups'} />
            <SidebarOption Icon= {AppsIcon}  title={'Apps'} />
            <SidebarOption Icon= {FileCopyIcon}  title={'File browser'} />
            <SidebarOption Icon= {ExpandLessIcon}  title={'Show less'} />
            <hr />
            <SidebarOption Icon= {ExpandMoreIcon}  title={'Channels'} />
            <hr />
            <SidebarOption Icon= {AddIcon}  title={'Add channel'} />

            {channels.map( channel => (
                <SidebarOption key={channel.id}  title={channel.name}  />
            ))}

            
        </div>
    )
}

export default Sidebar
