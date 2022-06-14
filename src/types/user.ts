export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    company: Company;
}

interface Address {
    street: string;
    suite: string;
    city: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserState {
    filterUsers: User[];
    filterText: string;
    users: User[];
    loading: boolean;
    error: null | string;
    modalWindow: any;
    toggleModalWindow: boolean;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    USER_DELETE = 'USER_DELETE',
    USER_MODAL_WINDOW = 'USER_MODAL_WINDOW',
    USER_TOGGLE_MODAL_WINDOW = 'USER_TOGGLE_MODAL_WINDOW',
    FILTER_USERS = 'FILTER_USERS',
}

interface FilterUsers {
    type: UserActionTypes.FILTER_USERS;
    payload: string;
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: User[];
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface UsersDeleteAction {
    type: UserActionTypes.USER_DELETE;
    payload: number;
}

interface UserModalWindowAction {
    type: UserActionTypes.USER_MODAL_WINDOW;
    payload: User;
}
interface UserToggleModalWindowAction {
    type: UserActionTypes.USER_TOGGLE_MODAL_WINDOW;
    payload: boolean;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | UsersDeleteAction | UserModalWindowAction | UserToggleModalWindowAction | FilterUsers;