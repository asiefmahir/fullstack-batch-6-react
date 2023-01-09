import {createContext, useReducer} from 'react';
import { studentReducer } from '../reducers/student';

export const StudentContext = createContext();

const initialState  = {
    studentName: '',
    editMode: false,
    students: [],
    editableStudent: null
}

const StudentProvider = ({children}) => {
    // console.log(children);
    // const [studentName, setStudentName] = useState('');
    // const [students, setStudents] = useState([]);
    // const [editMode, setEditMode] = useState(false);
    // const [editableStudent, setEditableStudent] = useState(null);

    const [studentStates, dispatch] = useReducer(studentReducer, initialState)
    const demoObj = {a: 10}

    return (
        <StudentContext.Provider value={{studentStates, dispatch}}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider