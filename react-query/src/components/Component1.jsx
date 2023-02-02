import { useState } from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { getAllNotes, removeNote, createNote } from '../services/notes';
import { Link } from 'react-router-dom';

function Compo1() {

  const [noteTitle, setNoteTitle] = useState('')

  const {data:notes, isLoading, fetchStatus, isError, error } = useQuery({queryKey: ["notes"], queryFn: getAllNotes, refetchOnMount: false})

  const client = useQueryClient()

  const removeMutation = useMutation(removeNote , {
      onSuccess: () => {
          client.invalidateQueries(["notes"])
      }
  })

  const createMutation = useMutation(createNote, {
    onSuccess: () => {
      client.invalidateQueries(["notes"])
    }
  })

  const createHandler = (e) => {
    e.preventDefault()
    const newNote = {
      id: Date.now() + '',
      title: noteTitle
    }
    createMutation.mutate(newNote)

  }
  return (
    <div className="App">
        <ul>
            <li>
                <Link to = '/'>Go to Compo 1</Link>
                <Link to = '/demo'>Go to Compo 2</Link>
            </li>
        </ul>
        <h2>
            Note App Compo 1
        </h2>
        <form>
            <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
            <button onClick={createHandler}>
                Create note
            </button>
        </form>
        <ul>
          {notes?.map(item => (
              <li key = {item.id}>
                  <span>{item.title}</span>
                  <button>edit</button>
                  <button onClick={() => removeMutation.mutate(item.id)}>remove</button>
              </li>
          ))}
        </ul>
        {fetchStatus === 'fetching' && (<div>Loading........</div>)}
        {isError && <h2>{error?.message}</h2>}
    </div>
  );
}

export default Compo1;