import {useContext} from "react";
import {StudentContext} from '../contexts/Student'

const AbsentStudentList = () => {
	const {studentStates, dispatch} = useContext(StudentContext)
	
	return (
		<div className="list absent-student-list">
			<h2>Absent Student List</h2>
			<ul>
				{studentStates.students
					.filter((item) => item.isPresent === false)
					.map((student) => (
						<li key = {student.id}>
							<span>{student.name}</span>
							<button onClick={() => dispatch({type: 'toggle_student_status', payload: student.id})}>
								Accidentally Added
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default AbsentStudentList;
