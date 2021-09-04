import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import useWindowDimensions from '../../../hooks/useWindowDimension';

interface Props {}

const CalendarTemplate = (props: Props) => {
  const { height, width } = useWindowDimensions();
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      title: 'title',
      start: new Date(Date.now()),
      end: new Date(Date.now() + 2 * (60 * 60 * 1000)),
      allDay: false,
    },
    {
      title: 'title2',
      start: new Date(Date.now()),
      end: new Date(Date.now() + 3 * (60 * 60 * 1000)),
      allDay: false,
    },
    {
      title: 'title3',
      start: new Date(),
      end: new Date(),
      allDay: true,
    },
    {
      title: 'title4',
      start: new Date(),
      end: new Date(),
      allDay: true,
    },
  ];

  return (
    <section className="section-calender">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week']}
        style={{
          width: 0.6 * width,
          height: 0.77 * height,
          overflow: 'hidden',
        }}
      />
    </section>
  );
};

export default CalendarTemplate;
