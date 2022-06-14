//hooks
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';

//css
import './FilterUsers.css';

function FilterUsers() {
    const { filterText } = useTypedSelector(state => state.user);

    const { filterUsers } = useActions();

    const test = (value: string) => filterUsers(value);

    return (
        <form className='filterForm'>
            <div className='filterWrapp'>
                <input className='filterInput' onChange={(e) => test(e.target.value)} value={filterText} />
                <button type='button' className='filterReset' onClick={() => test('')}>
                    <img src='./img/icon/reset.png' alt="reset" />
                </button>
            </div>
        </form>
    );
}

export default FilterUsers;