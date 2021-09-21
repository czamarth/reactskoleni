import React from 'react'

import './App.css'
import { DayPicker, NavBar, NoteView } from './components'


export function App() {

  // Challenge 1: Import and render NoteView and NavBar
  // Challenge 2: Comment out NoteView and import and render DayPicker
  // Challenge 3: Lift state up from DayPicker here and pass it to DayPicker and NoteView
  // Challenge 4: Use API from `store.ts` to store the notes

  // Class name tips:
  // - app__navbar
  // - app__content

  return (
    <div className="app">
      <NavBar className='app__navbar' />
      {/* <NoteView
      /> */}
      <DayPicker className='app__content' 
      />
    </div>
  )
}

export default App