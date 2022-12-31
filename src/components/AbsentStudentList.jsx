import {useContext} from "react";
import {StudentContext} from '../contexts/Student'

const AbsentStudentList = ({toggleHandler}) => {
	const {students} = useContext(StudentContext)
	return (
		<div className="list absent-student-list">
			<h2>Absent Student List</h2>
			<ul>
				{students
					.filter((item) => item.isPresent === false)
					.map((student) => (
						<li key = {student.id}>
							<span>{student.name}</span>
							<button onClick={() => toggleHandler(student.id)}>
								Accidentally Added
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default AbsentStudentList;
