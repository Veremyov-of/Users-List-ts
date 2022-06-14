import { UserAction, UserActionTypes } from "../../types/user"
import { Dispatch } from 'redux';
import axios from 'axios';
import { User } from './../../types/user';


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS });
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });

        } catch(e) {
            dispatch({ 
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: 'error'
            });
        }
    }
}

export const deleteUser = (id: number): UserAction  => {
    return { type: UserActionTypes.USER_DELETE, payload: id };
}

export const modalWindow = (user: User): UserAction => {
    return { type: UserActionTypes.USER_MODAL_WINDOW, payload: user };
}

export const toggleModal = (toggleModalWindow: boolean): UserAction => {
    return { type: UserActionTypes.USER_TOGGLE_MODAL_WINDOW, payload: toggleModalWindow };
}

export const filterUsers = (filterText: string) : UserAction => {
    return { type: UserActionTypes.FILTER_USERS, payload: filterText };
}