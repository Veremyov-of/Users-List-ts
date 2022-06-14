import { useTypedSelector } from './../../hooks/useTypedSelector';
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import UserItem from '../UserItem/UserItem';

//css
import './UserList.css';
import ModalWindow from '../ModalWindow/ModalWindow';

const UserList: React.FC = () => {
    const { toggleModalWindow, error, loading, filterUsers } = useTypedSelector(state => state.user);
    const { fetchUsers } = useActions();
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="userList">
            {toggleModalWindow ? <ModalWindow /> : null}
            {filterUsers ?
                filterUsers.map(user => {
                    return <UserItem key={user.id} user={user} />
                })
                :
                null
            }
        </div>
    );
};

export default UserList;