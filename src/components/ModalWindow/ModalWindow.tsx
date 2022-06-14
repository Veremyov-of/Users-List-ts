import './ModalWindow.css';
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from './../../hooks/useTypedSelector';

const ModalWindow: React.FC = () => {
    const { modalWindow } = useTypedSelector(state => state.user);
    const { company, address } = modalWindow;
    const { toggleModal } = useActions();
    const closeModal = () => toggleModal(false);
    return (
        <div onClick={closeModal} className="bgModalWindow">
            <div onClick={(e) => e.stopPropagation()} className="ModalWindow">
                <button type="button" onClick={closeModal} className='btnModal'>
                    <img src="./img/icon/delete.png" />
                </button>
                <div>
                    <div>Company Name: {company.name}</div>
                    <div>Catch Phrase: {company.catchPhrase}</div>
                </div>
                <div>
                    <div>City: {address.city}</div>
                    <div>Street: {address.street}</div>
                    <div>Suite: {address.suite}</div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;