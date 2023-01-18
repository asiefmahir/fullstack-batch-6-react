import {icons} from '../assets';

const AddItem = ({listAddItem, setEditMode}) => {
    return (
        <div className= {listAddItem ? 'add-item list-add-item' : 'add-item task-add-item'} onClick={() => setEditMode(true)}>
            <img className='add-item-icon' src={icons.plusIcon} alt="" />
            <p className="add-item-text">
                {listAddItem ? 'Add another list' : 'Add a task'}
            </p>
        </div>
    )
}

export default AddItem

// function add (a, b) {
//     return a + b
// }