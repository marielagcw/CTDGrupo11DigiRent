import React, {useState} from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker  from "react-modern-calendar-datepicker";

const NewCalendar = () => {
  
  
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="I'm a custom input"
      // value={selectedDay ? `✅: ${selectedDay.day}` : ''}
      className="ms-2 input-search" // a styling class
    />
  )

  const preselectedDays = [
    {
      year: 2019,
      month: 10,
      day: 2,
    },
    {
      year: 2019,
      month: 10,
      day: 15,
    },
    {
      year: 2019,
      month: 10,
      day: 30,
    },
  ]

  const [selectedDayRange, setSelectedDayRange] = useState(
    preselectedDays
  );
  return (
      <DatePicker 
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        renderInput={renderCustomInput}
        shouldHighlightWeekends
        colorPrimary="#FBC02D"
        renderFooter={() => (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 2rem' }}>
            <button
              type="button"
              onClick={() => {
                setSelectedDayRange([])
              }}
              className='btn btn-primary btn-lg'
            >
              Aplicar!
            </button>
          </div>)}
        />
    
  );
}

export default NewCalendar;