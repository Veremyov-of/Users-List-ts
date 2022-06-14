import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';

//hooks
import { useTypedSelector } from './../../hooks/useTypedSelector';

//components
import UserItem from '../UserItem/UserItem';
import ModalWindow from '../ModalWindow/ModalWindow';
import Error from '../Error/Error';

//css
import './UserList.css';

//UI
import Loading from '../../UI/Loading/Loading';

const UserList: React.FC = () => {

    const { toggleModalWindow, error, loading, filterUsers } = useTypedSelector(state => state.user);

    const { fetchUsers } = useActions();

    const loadingComp = loading ? <Loading /> : null;
    const errorComp = error ? <Error /> : null;

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="userList">
            {loadingComp}
            {errorComp}
            {toggleModalWindow ? <ModalWindow /> : null}
            {filterUsers ?
                filterUsers.map(user => {
                    return <UserItem key={user.id} {...user} />
                })
                :
                null}
        </div>
    );
};

export default UserList;