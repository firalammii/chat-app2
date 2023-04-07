import axios from "axios";

// const API_URL = 'http://localhost:3000/users';
const API_URL = 'https://faya-chat-app-api.onrender.com/users';

export const fetchUsers = () => axios.get(API_URL);
export const createUser = (userObj) => axios.post(API_URL, userObj);
export const updateUser = (id, msgObj) => axios.patch(`${API_URL}/${id}`, msgObj);
// export const updateUser = (id, userObj) => axios.patch(`${API_URL}/${id}`, userObj);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
