import React, { useContext, useEffect, useRef, useState } from 'react';
import { MyMessage } from './MessageShow';
import { TheirMessage } from './MessageShow';

import { Context } from '../context-API/ContextProvider';

const Messages = () => {

    const messagesEndRef = useRef(null);

    const { currUser, currChat, updateCurrChat } = useContext(Context);
    console.log('currChat', currChat);

    const chatFriend = currChat?.users.filter(friend => friend._id !== currUser._id)[0];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [currChat]);

    return (
        currChat && currChat.messages.length > 0 &&
        currChat.messages.map(message => {
            // console.log(message)
            const myMessage = currUser._id === message.sender;
            // console.log(myMessage);
            return (
                <div key={message.id} className='messages' ref={messagesEndRef}>
                    {
                        myMessage ?
                            <MyMessage
                                // key={message.id}
                                message={message} 
                                user={currUser}
                            />
                            : <TheirMessage
                                // key={message.text}
                                message={message}
                                user={chatFriend}
                            />
                    }
                </div>
            );
        })
    );
};
//01425919938000
export default Messages;