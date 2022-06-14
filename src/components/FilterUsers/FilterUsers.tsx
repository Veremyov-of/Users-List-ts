//hooks
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';

//css
import './FilterUsers.css';

function FilterUsers() {
    const { filterText } = useTypedSelector(state => state.user);

    const { filterUsers, resetUsers } = useActions();

    const changeFilter = (value: string) => filterUsers(value);
    return (
        <form className='filterForm'>
            <div className='filterWrapp'>
                <input className='filterInput' onChange={(e) => changeFilter(e.target.value)} value={filterText} />
                <button type='button' className='filterReset' onClick={() => resetUsers()}>
                    <img src='./img/icon/reset.png' alt="reset" />
                </button>
            </div>
        </form>
    );
}

export default FilterUsers;