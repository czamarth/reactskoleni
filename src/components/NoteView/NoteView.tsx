import classNames from 'classnames';
import React from 'react';

import './NoteView.css';

export interface NoteViewProps {
  className?: string  // ? means it is not mandatory
}

export function NoteView(props: NoteViewProps) {
  const { className } = props

  // Challenge 1: 
  //  - Add textarea for user input
  //  - Set a placeholder to "What have you done this day?" or other appropriate string
  //  - Enable autofocus of the input
  //  - Add a state for the note content
  //  - Save the note between sessions in localStorage via localStorage.getItem() and localStorage.setItem()

  // Challenge 3: 
  //  - Define a new prop to receive the selected day and write it in placeholder instead of "this day"
  //  - Think of changing the logic of saving the note in localStorage so that it is different for each day

  // Challenge 4
  //  - Define a new prop to receive the store
  //  - Use store to save the note
  
  // TODO
  const [note, setNote] = React.useState(localStorage.getItem('KEY_NOTE') ?? ''); // nvl(), if undef or null, used after ??
  
  React.useEffect( () => {
    localStorage.setItem('KEY_NOTE', note);   // local keyvalue store
  }, [note])  // we want to change only in case note changed, second parameter is array of values checked if they have changed
                // without parameters it's executed during the 1st render

  return (
    <section className={classNames("note-view", className)}>
      <textarea 
        placeholder='What have you done this day?'
        autoFocus
        value={note}
        onChange={(event) => {
            setNote(event.target.value)
        }}
      />
    </section>
  )
}
