import React from 'react'

import './App.css'
import { DayPicker, NavBar, NoteView } from './components'
import { useStoreProvider } from './Store';
import { formatDay } from './utils';


export function App() {

  // Challenge 1: Import and render NoteView and NavBar
  // Challenge 2: Comment out NoteView and import and render DayPicker
  // Challenge 3: Lift state up from DayPicker here and pass it to DayPicker and NoteView
  // Challenge 4: Use API from `store.ts` to store the notes

  // Class name tips:
  // - app__navbar
  // - app__content

  const [selectedDay, selectDay] = React.useState<Date | null>(null);  // string or null type

  const store = useStoreProvider();

  const title = selectedDay !== null ? formatDay(selectedDay) : 'Done App';

  const handleBack = React.useCallback( () => {
      selectDay(null)
    }, [selectDay])

  return (
    <div className="app">
      <NavBar 
        title={title}
        canGoBack={selectedDay !== null}
        onBack={handleBack}
        className='app__navbar' />
        
      {!selectedDay && (
        <DayPicker 
            selectedDay={selectedDay}
            onSelectDay={selectDay} 
            className='app__content'
            store={store}
        />
      )}

      {selectedDay && (
          <NoteView 
            className='app__content' 
            store={store} 
            selectedDay={selectedDay}
          />
      )}
      
    </div>
  )
}

export default App