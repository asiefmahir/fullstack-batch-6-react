import {useContext} from "react";
import {StudentContext} from '../contexts/Student'

const Form = () => {
	const {studentStates, dispatch} = useContext(StudentContext);

	const createStudentHandler = (e) => {
        e.preventDefault();
        if (!studentStates.studentName) {
            return alert (`please provide a valid name`)
        }
        dispatch({type: 'add_student'})
    }

	const updateHandler = (e) => {
        e.preventDefault();

        if (!studentStates.studentName) {
            return alert (`please provide a valid name`)
        }
        
        dispatch({type: 'update_student'})

    }

	return (
		<form
			onSubmit={(e) => {
				studentStates.editMode ? updateHandler(e) : createStudentHandler(e);
			}}
			className="student-form"
		>
			<input
				type="text"
				value={studentStates.studentName}
				onChange={(e) => dispatch({type: 'change_student_name', payload: e.target.value})}
			/>
			<button
				onClick={(e) => {
					studentStates.editMode ? updateHandler(e) : createStudentHandler(e);
				}}
				type="submit"
			>
				Add Student
			</button>
		</form>
	);
};

export default Form;
