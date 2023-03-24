import React from 'react';
import ChatFeed from './chat-area/ChatFeed';
import Sidebar from './side-bar/Sidebar';

const SideBarNchatFeed = () => {
    return (
        <div className='container-sidebar-n-chatfeed'>
            <Sidebar />
            <ChatFeed />
        </div>
    );
};

export default SideBarNchatFeed;