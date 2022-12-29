import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');


  const getAllNotes = async () => {
    try {
      const response = await fetch(`http://localhost:8080/notes`);
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went Wrong")
      }
      const data = await response.json();
      setNotes(data);
      setIsLoading(false);
      setNoteTitle('')
    } catch (error) {
      console.log(error, 'error');
      setIsLoading(false);
      setErrorMessage(error.message)
    }
  }

  // getAllNotes()

  const createHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      return alert(`Please provide a valid title`)
    }
    const newNote = {
      id: Date.now() + '',
      title: noteTitle
    }

    // setNotes([...notes, newNote]);
    fetch(`http://localhost:8080/notes`, {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(() => {
          getAllNotes()
      })
  }


  const removeHandler = (id) => {
    fetch(`http://localhost:8080/notes/${id}` , {
      method: "DELETE"
    })
      .then(() => {
          getAllNotes()
      })
  }

  useEffect(() => {
    getAllNotes()
  }, [])

  return (
    <div className='App' >
        <form onSubmit={createHandler}>
            <input type="text" value={noteTitle} onChange = {(e) => setNoteTitle(e.target.value)} />
            <button type='submit'>{editMode ? 'Update Note': 'Create Note'}</button>
        </form>
        <ul>
            {notes.map(note => (
              <li key = {note.id}>
                  <span>{note.title}</span>
                  <button>Edit</button>
                  <button onClick={() => removeHandler(note.id)}>Delete</button>
              </li>
            ))}
        </ul>
        {isLoading && (
          <div>Loading..............</div>
        )}
        {errorMessage && (
          <p>{errorMessage}</p>
        )}
    </div>
  )
}

/**
 * 1) state ba props change -> Component Rerun -> ReRender
 */
export default App;
