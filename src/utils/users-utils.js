
import * as usersApi from '../api/usersApi.js';

// import { userActionTypes } from './actionTypes.js';
// const { FETCH_USERS, CREATE_USER, UPDATE_USER, DELETE_USER, LOGIN, LOGOUT, ACTIVE_FRIEND } = userActionTypes;

export const fetchUsers = async () => {
    try {
        const { data } = await usersApi.fetchUsers();
        // dispatch({ type: FETCH_USERS, payload: data });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const createUser = async (user) => {
    try {
        const { data } = await usersApi.createUser(user);
        // dispatch({ type: CREATE_USER, payload: data });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (id, userObj) => {

    usersApi.updateUser(id, userObj)
        // .then(data => dispatch({ type: UPDATE_USER, payload: data }))
        .then(data => data)
        .catch((err) => console.log(err));

};

// export const updateUser = (id, userObj) => async (dispatch) => {
//     console.log(id);
//     console.log(userObj);
//     try {
//         const { data } = await usersApi.updateUser(id, userObj);
//         dispatch({ type: UPDATE_USER, payload: userObj });
//     } catch (error) {
//         console.log(error);
//     }
// };

export const deleteUser = async (id) => {
    try {
        const { data } = await usersApi.deleteUser(id);
        // dispatch({ type: DELETE_USER, payload: data });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const login = async (user) => {
    // dispatch({ type: LOGIN, payload: user });
};
export const logout = async (user) => {
    // dispatch({ type: LOGOUT, payload: user });
};
export const setActiveFriend = async (friend) => {
    // dispatch({ type: ACTIVE_FRIEND, payload: friend });
}


