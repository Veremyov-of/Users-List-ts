import { useTypedSelector } from './../../hooks/useTypedSelector';
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import UserItem from '../UserItem/UserItem';
import ModalWindow from '../ModalWindow/ModalWindow';
import Loading from '../../UI/Loading/Loading';
import Error from '../Error/Error';

//css
import './UserList.css';


const UserList: React.FC = () => {
    const { toggleModalWindow, error, loading, filterUsers } = useTypedSelector(state => state.user);
    const { fetchUsers } = useActions();
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="userList">
            {loading ? <Loading /> : null}
            {error ? <Error /> : null}
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