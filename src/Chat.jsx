import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import db from './firebase';

import './Chat.css';

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
    const { roomId } = useParams();

    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    const [{ user }] = useStateValue();

    useEffect( () => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
             .onSnapshot( snapshot => (
                setRoomDetails(snapshot.data())
             ))
        }

        db.collection('rooms').doc(roomId)
         .collection('messages')
         .orderBy('timestamp', 'asc')
         .onSnapshot( snapshot =>
            setRoomMessages(
                snapshot.docs.map( doc => ({
                    id:doc.id,
                    data:doc.data()
                }))
            )
         );

    }, [roomId] );

    return (
        <div className='chat'>
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon /> 
                    </h4>
                </div> 
                <div className='chat__headerRight'>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map(roomMessage => (
                    <Message key={roomMessage.id} message={roomMessage.data.message} timestamp={roomMessage.data.timestamp} user={user?.displayName} userImage={user?.photoURL} />
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
