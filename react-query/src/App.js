import './App.css';
import { useState } from 'react';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { getAllNotes, removeNote, createNote } from './services/notes';
import Router from './router/Router';

function App() {

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App;
