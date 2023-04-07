import axios from "axios";

const API_URL = 'http://localhost:3000/chats';
// const API_URL = 'https://faya-chat-app-api.onrender.com/chats';

export const fetchChats = () => axios.get(API_URL);
export const createChat = (chatObj) => axios.post(API_URL, chatObj);
export const addMessage = (chatId, msgObj) => axios.put(`${API_URL}/addmsg/${chatId}`, msgObj);
export const updateChat = (chatId, chatObj) => axios.patch(`${API_URL}/update/${chatId}`, chatObj);
export const deleteChat = (id) => axios.delete(`${API_URL}/${id}`);