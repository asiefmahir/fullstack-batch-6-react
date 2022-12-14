import { useState } from "react";
// import SkillSection from './SkillSection.jsx'
import "./App.css";
import Form from "./components/Form";
import NoteList from "./components/NoteList";



function App() {


    const [noteTitle, setNoteTitle] = useState("");
    const [notes, setNotes] = useState([]);
    
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null);

    return (
        <div className="App">
            {/* <form
                onSubmit={(e) => {
                    editMode ? updateHandler(e) : createHandler(e);
                }}
            >
                <input
                    value={noteTitle}
                    type="text"
                    onChange={(event) => setNoteTitle(event.target.value)}
                />
                <button
                    onClick={(e) => {
                        editMode ? updateHandler(e) : createHandler(e);
                    }}
                    type="submit"
                >
                    {editMode ? "Update Note" : "Add Note"}
                </button>
            </form> */}
            <Form 
                noteTitle = {noteTitle}
                setNoteTitle = {setNoteTitle}
                notes = {notes}
                setNotes = {setNotes}
                editableNote = {editableNote}
                setEditableNote = {setEditableNote}
                editMode = {editMode}
                setEditMode = {setEditMode}
            />
            {/* <ul>
                {notes?.map((item) => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <button onClick={() => editHandler(item.id)}>
                            Edit
                        </button>
                        <button onClick={() => removeHandler(item.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul> */}
            <NoteList 
                setNoteTitle = {setNoteTitle}
                notes = {notes}
                setNotes = {setNotes}
                editableNote = {editableNote}
                setEditableNote = {setEditableNote}
                setEditMode = {setEditMode}
            />
        </div>
    );
    
}


// function App() {
//     const mahirSkills = ["Js", "react", "node"];
//     const billalSKills = ['Js', 'react', 'css', 'bootstrap']
//     const naimSKills = ['Js', 'react', 'css', 'bootstrap', 'wp']

//     return (
//         <div className="App">
//             <SkillSection
//               skills = {mahirSkills}
//               name = "Mahir"
//               demo = {{a: 10}}
//             />
//             <hr />
//             <SkillSection
//               skills= {billalSKills}
//               name = "Billal"
//             />
//             <hr />
//             <SkillSection
//               skills = {naimSKills}
//               name = "Naim"
//             />
//         </div>
//     );
// }

export default App;


/**
 * 1) It must be a function
 * 2) That Function should return something
 * 3) That returned something should be some html-ish code
 */


