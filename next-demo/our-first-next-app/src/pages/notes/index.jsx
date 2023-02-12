import {useState, useEffect} from 'react';
import {useRouter} from 'next/router'

const Notes = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [notes, setNotes] = useState([])

    // const router = useRouter()

    const createHandler = (e) => {
        e.preventDefault()
        const newNote = {
            id: Date.now() + '',
            title: noteTitle
        };

        fetch(`http://localhost:5000/notes`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
            .then(() => {
                 fetch(`http://localhost:5000/notes`)
                    .then(res => res.json())
                    .then(data => setNotes(data))
                // router.push('notes')
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/notes`)
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

  return (
    <div>
        <h2>
            Note App
        </h2>
        <form onSubmit={createHandler}>
            <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
            <button type="submit">
                Add Note
            </button>
        </form>
        <ul>
            {notes.map(item => (
                <li key ={item.id}>
                    <span>{item.title}</span>
                    <button onClick={() => removeHandler(item.id)}>Remove Me</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

// export async function getServerSideProps(context) {
//     console.log('I am called from server component')
//     const response = await fetch(`http://localhost:5000/notes`);
//     const notes = await response.json()
//   return {
//     props: {
//         notes
//     }, // will be passed to the page component as props
//   }
// }


export default Notes