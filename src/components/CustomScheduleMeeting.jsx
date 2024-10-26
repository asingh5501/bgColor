import React from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';

const availableTimeslots = [
  {
    startTime: new Date(2024, 9, 13, 9, 0), // Sunday (October 13, 2024)
    endTime: new Date(2024, 9, 13, 10, 0),
  },
  {
    startTime: new Date(2024, 9, 14, 9, 0), // Monday (October 14, 2024)
    endTime: new Date(2024, 9, 14, 10, 0),
  },
  {
    startTime: new Date(2024, 9, 15, 9, 0), // Tuesday (October 15, 2024)
    endTime: new Date(2024, 9, 15, 10, 0),
  },
  // Add more time slots as needed
];

// Helper function to check if a day is Sunday
const isSunday = (date) => {
  console.log(date.getDay() === 0)
  return date.getDay() === 0; // Sunday is 0 in JavaScript's Date.getDay()
};

// Helper function to check if a date matches a meeting slot
const isMeetingDay = (day, timeslots) => {
  return timeslots.some(slot => {
    const slotDate = slot.startTime.toDateString(); // Compare by date
    return new Date(day).toDateString() === slotDate;
  });
};

const CustomScheduleMeeting = () => {
  let isHighlightedSunday = false // Check if the current day is Sunday
  return (
    <div>
      <h1>Schedule a Meeting</h1>
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#4caf50"
        eventDurationInMinutes={60}
        availableTimeslots={availableTimeslots}
        // Highlight Sundays and the meeting days
        renderDay={({
          day,
          formattedDate,
          hasEventScheduled,
          isFirstDay,
          isLastDay,
        }) => {
          const currentDay = new Date(day); // Get the date object for the day
          isHighlightedSunday = isSunday(currentDay); // Check if the current day is Sunday
          console.log(isHighlightedSunday,'isHighlightedSunday')
          const isHighlightedMeeting = isMeetingDay(currentDay, availableTimeslots); // Check if it's a meeting day
          
          return (
            <div
              style={{
                padding: '10px',
                margin: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: isHighlightedSunday
                  ? '#ffeb3b' // Highlight all Sundays
                  : isHighlightedMeeting
                  ? '#4caf50' // Highlight meeting days in green
                  : 'transparent', // No highlight for other days
                color: isHighlightedSunday || isHighlightedMeeting ? '#000' : '#333',
              }}
            >
              
              {formattedDate} {/* Render the formatted date */}
            </div>
          );
        }}
      />
      <div className='bg-red-500'>{isHighlightedSunday}</div>
    </div>
  );
};

export default CustomScheduleMeeting;
