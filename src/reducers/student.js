export const studentReducer = (state, action) => {
	switch (action.type) {
		case "change_student_name": {
			return {
				...state,
				studentName: action.payload,
			};
		}

		case "add_student": {
			const newStudent = {
				id: Date.now() + "",
				name: state.studentName,
			};

			return {
				...state,
				students: [...state.students, newStudent],
				studentName: "",
			};
		}

		case "remove_student": {
			return {
				...state,
				students: state.students.filter(
					(item) => item.id !== action.payload
				),
			};
		}

		case "update_student": {
			return {
				...state,
				students: state.students.map((item) => {
					if (item.id === state.editableStudent.id) {
						item.name = state.studentName;
					}

					return item;
				}),
				editMode: false,
				editableStudent: null,
				studentName: "",
			};
		}

		case "edit_student": {
			const toBeEditedStudent = state.students.find(
				(item) => item.id === action.payload
			);

			return {
				...state,
				editMode: true,
				editableStudent: toBeEditedStudent,
				studentName: toBeEditedStudent.name,
			};
		}

		case "make_present": {
			return {
				...state,
				students: state.students.map((item) => {
					if (item.id === action.payload) {
						if (item.isPresent === true) {
							alert(`This student is already in Present List`);
						} else if (item.isPresent === false) {
							alert(
								`Please Make use of the accidentally added button`
							);
						} else if (item.isPresent === undefined) {
							item.isPresent = true;
						}
					}

					return item;
				}),
			};
		}

		case "make_absent": {
			return {
				...state,
				students: state.students.map((item) => {
					if (item.id === action.payload) {
						if (item.isPresent === undefined) {
							item.isPresent = false;
						} else if (item.isPresent === true) {
							alert(
								`Please Make use of the accidentally added button`
							);
						} else if (item.isPresent === false) {
							alert(`This student is already in Present List`);
						}
					}

					return item;
				}),
			};
		}

		case "toggle_student_status": {
			return {
				...state,
				students: state.students.map((item) => {
					if (item.id === action.payload) {
						item.isPresent = !item.isPresent;
					}

					return item;
				}),
			};
		}

		default:
			break;
	}
};

// state  = {
//     studentName: '',
//     editMode: false,
//     students: [],
//     editableStudent: null
// }
