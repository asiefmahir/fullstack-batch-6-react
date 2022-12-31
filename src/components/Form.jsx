import {useContext} from "react";
import {StudentContext} from '../contexts/Student'

const Form = () => {
	const studentCtx = useContext(StudentContext);
	console.log(studentCtx);

	const createStudentHandler = (e) => {
        e.preventDefault();
        if (!studentCtx.studentName) {
            return alert (`please provide a valid name`)
        }
        const newStudent = {
            id: Date.now() + '',
            name: studentCtx.studentName,
            // isPresent: undefined,
        }

        studentCtx.setStudents([...studentCtx.students, newStudent]);
        studentCtx.setStudentName('')
    }

	const updateHandler = (e) => {
        e.preventDefault();

        if (!studentCtx.studentName) {
            return alert (`please provide a valid name`)
        }
        const newStudentList = studentCtx.students.map(item => {
            if (item.id === studentCtx.editableStudent.id) {
                item.name = studentCtx.studentName
            };

            return item;
        })

        studentCtx.setStudents(newStudentList);

        studentCtx.setStudentName('');
        studentCtx.setEditMode(false);
        studentCtx.setEditableStudent(null)

        // setStudents()
    }

	return (
		<form
			onSubmit={(e) => {
				studentCtx.editMode ? updateHandler(e) : createStudentHandler(e);
			}}
			className="student-form"
		>
			<input
				type="text"
				value={studentCtx.studentName}
				onChange={(e) => studentCtx.setStudentName(e.target.value)}
			/>
			<button
				onClick={(e) => {
					studentCtx.editMode ? updateHandler(e) : createStudentHandler(e);
				}}
				type="submit"
			>
				Add Student
			</button>
		</form>
	);
};

export default Form;
