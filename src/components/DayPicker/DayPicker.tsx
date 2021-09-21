import React from 'react'
import classNames from 'classnames'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import './DayPicker.css'
import { Store } from '../../Store';

export interface DayPickerProps {
  className?: string
  selectedDay: Date | null
  onSelectDay: (day: Date) => void
  store: Store
}

export function DayPicker(props: DayPickerProps) {
  const { className, selectedDay, onSelectDay, store } = props

  // TODO:
  // - Integrate a react-calendar library (don't forget to import it's CSS)
  // - Lift the state containing picked day up via props
  // - Use `tileClassName` prop to set certain class name if day has a prop and other class name if it doesn't

  // Class name tips:
  // - day-picker
  // - day-picker__day--non-empty
  // - day-picker__day--empty



  return (
    <Calendar 
      className={classNames('day-picker', className)}  // make it reusable from the top and we don't want to change the global layout from the component
      value={selectedDay}
      onChange={onSelectDay}
      tileClassName={ (props) => {
          return store.hasNote(props.date) ? 'day-picker__day--non-empty' : 'day-picker__day--empty'
      }}
    />
  )
}