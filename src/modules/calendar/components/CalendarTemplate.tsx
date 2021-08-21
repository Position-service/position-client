import React from 'react';
import CalendarHeader from './CalendarHeader';
import { Calendar, momentLocalizer } from 'react-big-calendar';

interface Props {}

const CalendarWrapper = (props: Props) => {
  return (
    <div>
      <CalendarHeader />
      {/* <Calendar /> */}
    </div>
  );
};

export default CalendarWrapper;
