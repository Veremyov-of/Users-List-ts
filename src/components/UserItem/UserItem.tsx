import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useCallback } from 'react';
import Hightlight from '../Hightlight/Hightlight';


//css
import "./UserItem.css";





const UserItem = ({ user }: any) => {
    const { filterText } = useTypedSelector(state => state.user);
    const { deleteUser, modalWindow, toggleModal } = useActions();

    const deleteUserItem = () => deleteUser(user.id);
    const openModal = () => {
        modalWindow(user);
        toggleModal(true);
    }

    const light = useCallback((str:string) => {
        return <Hightlight filter={filterText} str={str} />
      }, [filterText])

    return (
        <div className='userItem'>
            <button onClick={openModal} className='userInfo' type='button'>
                <span>Name: {light(user.name)}</span>
                <span>Username: {light(user.username)}</span>
                <span>Email: {light(user.email)}</span>
            </button>
            <button className='btnDelete' type='button' onClick={deleteUserItem} >
                <img src="./img/icon/delete.png" />
            </button>
        </div>
    )
}

export default UserItem;
