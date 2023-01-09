import {useContext} from "react";
import {StudentContext} from '../contexts/Student'

const AllStudentList = () => {
    const {studentStates, dispatch}  = useContext(StudentContext)
    
	return (
		<div className="list all-student-list">
			<h2>All Student List</h2>
			<ul>
				{studentStates.students.map((student) => (
					<li key = {student.id}>
						<span>{student.name}</span>
						<button onClick={() => dispatch({type: 'edit_student', payload: student.id})}>
							Edit
						</button>
						<button onClick={() => dispatch({type: 'remove_student', payload: student.id})}>
							Delete
						</button>
						<button onClick={() => dispatch({type: 'make_present', payload: student.id})}>
							Make Present
						</button>
						<button onClick={() => dispatch({type: 'make_absent', payload: student.id})}>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
