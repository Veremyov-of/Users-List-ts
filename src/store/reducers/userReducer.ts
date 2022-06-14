import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
    filterUsers: [],
    filterText: '',
    users: [],
    loading: false,
    modalWindow: {},
    error: null,
    toggleModalWindow: false,
}


export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case UserActionTypes.FETCH_USERS:
            return { ...state, loading: true, error: null, users: [] };
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { ...state, loading: false, error: null, users: action.payload, filterUsers: action.payload};
        case UserActionTypes.FETCH_USERS_ERROR:
            return { ...state, loading: false, error: action.payload, users: [] };
        case UserActionTypes.USER_DELETE:
            const newUsers = state.users.filter(item => item.id !== action.payload);
            return { ...state, users: [...newUsers] };
        case UserActionTypes.USER_MODAL_WINDOW:
            return { ...state, modalWindow: {...action.payload} };
        case UserActionTypes.USER_TOGGLE_MODAL_WINDOW:
            return { ...state, toggleModalWindow: action.payload };
        case UserActionTypes.FILTER_USERS:
            const reg = new RegExp(action.payload, 'i');
            const filterArr = state.users.filter(item => reg.test(item.name) || reg.test(item.username) || reg.test(item.email) ? item : null);
            return { ...state, filterText: action.payload, filterUsers: filterArr};

        default: 
            return state;
    }
}