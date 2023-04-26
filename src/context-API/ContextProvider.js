import { createContext, useEffect, useState } from "react";
import { fetchChats } from "../utils/chats-utils.js";
import { fetchUsers } from "../utils/users-utils.js";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [fayaStates, setFayaStates] = useState({
        // currChat: null,
        // currUser: null,
        chats: [],
        users: []
    });
    const [currChat, setCurrChat] = useState(null);
    // const [users, setUsers] = useState(fetchUsers());
    // const [chats, setChats] = useState(fetchChats());
    const [currUser, setCurrUser] = useState(null);



    useEffect(() => {
        // setInterval(initializeAllStates, 500);
        initializeAllStates();
    }, [currChat]);

    const initializeAllStates = async () => {
        const fusers = await fetchUsers();
        const fchats = await fetchChats();
        setFayaStates({ ...fayaStates, users: fusers, chats: fchats });
    };

    console.log('users:', fayaStates.users);

    const updateCurrChat = (msgObj) => {
        setCurrChat({ ...currChat, messages: [...currChat.messages, msgObj] });
    };

    const { users, chats } = fayaStates;
    return (
        <Context.Provider
            value={
                { users, chats, currUser, setCurrUser, currChat, setCurrChat, updateCurrChat }
            }
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;