import {createContext, useState} from 'react';

export const StudentContext = createContext();

const StudentProvider = ({children}) => {
    console.log(children);
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);
    const demoObj = {a: 10}

    return (
        <StudentContext.Provider value={{studentName, setStudentName, students, setStudents, editMode, setEditMode, editableStudent, setEditableStudent, demoObj}}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider