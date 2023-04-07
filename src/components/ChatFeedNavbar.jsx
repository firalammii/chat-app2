import React, { useContext } from 'react';
import SearchMessages from './SearchMessages';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';

import { Context } from '../context-API/ContextProvider';

const Navbar = () => {

    const { currUser, currChat } = useContext(Context);
    // console.log('currChat', currChat);
    // console.log('currUser', currUser);

    return (
        <div className='chat-feed-navbar'>
            {
                currChat && currChat.users.length > 0 ?
                    <>
                    {
                            currChat.users.filter(user => user._id !== currUser._id).map(friend => {
                            // console.log(friend);
                                const image = friend.pp ? <img src={friend.pp} alt='' className='img' />
                                    : <div className='img'>{friend.displayName.slice(0, 2).toUpperCase()}</div>;
                            return (
                                <div key={friend._id} className='chat-friend' >
                                    <div className='image'>{image}</div>
                                    <span className='chat-friend'>{friend.displayName}</span>
                                </div>
                            );
                        })
                    }
                    <SearchMessages />
                    <VideoCallIcon />
                    <CallIcon />
                </>
                    : <p>select a friend to chat with</p>

            }
        </div>
    );
};

export default Navbar;