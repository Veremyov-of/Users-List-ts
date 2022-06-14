import { UserAction, UserActionTypes } from "../../types/user"
import { Dispatch } from 'redux';
import { User } from './../../types/user';


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => {
                if(!response.ok) { throw response }
                return response.json()
            })
            .then( json => {
                dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: json });
            })
            .catch( err => {
                dispatch({ 
                    type: UserActionTypes.FETCH_USERS_ERROR, 
                    payload: err
                });
            })
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