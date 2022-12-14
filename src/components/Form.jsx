import React from "react";

const Form = (props) => {

    const createHandler = (e) => {
        e.preventDefault();
        if (!props.noteTitle) {
            return alert(`Please Provide a Valid Title`);
        }
        const newNote = {
            id: Date.now() + "",
            title: props.noteTitle,
        };

        props.setNotes([...props.notes, newNote]);
        props.setNoteTitle("");
    };

     const updateHandler = (e) => {
        e.preventDefault();
        if (!props.noteTitle) {
            return alert(`Please Provide a valid title`);
        }

        const newNotes = props.notes.map((item) => {
            // 2
            if (item.id === props.editableNote.id) {
                item.title = props.noteTitle;
            }

            return item;
        });

        props.setNotes(newNotes);
        props.setEditMode(false);
        props.setEditableNote(null);
        props.setNoteTitle("");
    };

	return (
		<form
			onSubmit={(e) => {
				props.editMode ? updateHandler(e) : createHandler(e);
			}}
		>
			<input
				value={props.noteTitle}
				type="text"
				onChange={(event) => props.setNoteTitle(event.target.value)}
			/>
			<button
				onClick={(e) => {
					props.editMode ? updateHandler(e) : createHandler(e);
				}}
				type="submit"
			>
				{props.editMode ? "Update Note" : "Add Note"}
			</button>
		</form>
	);
};

export default Form;
