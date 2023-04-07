
import * as chatsApi from '../api/chatsApis.js';

// import { chatsActionTypes } from "./actionTypes.js";
// const { FETCH_CHATS, CREATE_CHAT, UPDATE_CHAT, DELETE_CHAT, SELECT_CHAT, ADD_MESSAGE } = chatsActionTypes;

export const fetchChats = async () => {
    try {
        const { data } = await chatsApi.fetchChats();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const createChat = async (chatObj) => {
    try {
        const { data } = await chatsApi.createChat(chatObj);
        return data;
        // dispatch({ type: CREATE_CHAT, payload: data });
        // const { data } = await chatsApi.createChat(chatObj);
    } catch (error) {
        console.log(error);
    }
};

export const addMessage = async (chatId, msgObj) => {
    try {
        const { data } = await chatsApi.addMessage(chatId, msgObj);
        // dispatch({ type: ADD_MESSAGE, payload: data });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateChat = async (chatId, chatObj) => {
    try {
        const { data } = await chatsApi.updateChat(chatId, chatObj);
        // dispatch({ type: UPDATE_CHAT, payload: data });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteChat = async (id) => {
    try {
        const { data } = await chatsApi.deleteChat(id);
        // dispatch({ type: DELETE_CHAT, payload: data });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const setActiveChat = (chat) => {
    // dispatch({ type: SELECT_CHAT, payload: chat });
};
