// import { useState } from "react";
import SkillSection from './SkillSection.jsx'
import "./App.css";



function App() {
    const mahirSkills = ["Js", "react", "node"];
    const billalSKills = ['Js', 'react', 'css', 'bootstrap']
    const naimSKills = ['Js', 'react', 'css', 'bootstrap', 'wp']

    return (
        <div className="App">
            <SkillSection
              skills = {mahirSkills}
              name = "Mahir"
              demo = {{a: 10}}
            />
            <hr />
            <SkillSection
              skills= {billalSKills}
              name = "Billal"
            />
            <hr />
            <SkillSection
              skills = {naimSKills}
              name = "Naim"
            />
        </div>
    );
}

export default App;


/**
 * 1) It must be a function
 * 2) That Function should return something
 * 3) That returned something should be some html-ish code
 */
// function App() {
//     const [noteTitle, setNoteTitle] = useState("");
//     const [notes, setNotes] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editableNote, setEditableNote] = useState(null);

//     // {}, {id: '1'}, {} / null

//     /**
//      * notes = [
//      *    {id: '1', title: 'Note-11111'},
//      *    {id: '2', title: 'Note-1'},
//      *    {id: '3', title: 'Note-1'},
//      *
//      * ]
//      */

//     // 1 !== 2

//     const createHandler = (e) => {
//         e.preventDefault();
//         if (!noteTitle) {
//             return alert(`Please Provide a Valid Title`);
//         }
//         const newNote = {
//             id: Date.now() + "",
//             title: noteTitle,
//         };

//         setNotes([...notes, newNote]);
//         setNoteTitle("");
//     };

//     const removeHandler = (id) => {
//         // '2'
//         const newNotes = notes.filter((item) => item.id !== id); // return 2 !== 2 === false;

//         setNotes(newNotes);
//     };

//     const editHandler = (id) => {
//         const toBeEditedNote = notes.find((item) => item.id === id); // 1 === 1;

//         setEditMode(true);
//         setEditableNote(toBeEditedNote);
//         setNoteTitle(toBeEditedNote.title);
//     };

//     const updateHandler = (e) => {
//         e.preventDefault();
//         if (!noteTitle) {
//             return alert(`Please Provide a valid title`);
//         }

//         const newNotes = notes.map((item) => {
//             // 2
//             if (item.id === editableNote.id) {
//                 item.title = noteTitle;
//             }

//             return item;
//         });

//         setNotes(newNotes);
//         setEditMode(false);
//         setEditableNote(null);
//         setNoteTitle("");
//     };

//     return (
//         <div className="App">
//             <form
//                 onSubmit={(e) => {
//                     editMode ? updateHandler(e) : createHandler(e);
//                 }}
//             >
//                 <input
//                     value={noteTitle}
//                     type="text"
//                     onChange={(event) => setNoteTitle(event.target.value)}
//                 />
//                 <button
//                     onClick={(e) => {
//                         editMode ? updateHandler(e) : createHandler(e);
//                     }}
//                     type="submit"
//                 >
//                     {editMode ? "Update Note" : "Add Note"}
//                 </button>
//             </form>
//             <ul>
//                 {notes?.map((item) => (
//                     <li key={item.id}>
//                         <span>{item.title}</span>
//                         <button onClick={() => editHandler(item.id)}>
//                             Edit
//                         </button>
//                         <button onClick={() => removeHandler(item.id)}>
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


