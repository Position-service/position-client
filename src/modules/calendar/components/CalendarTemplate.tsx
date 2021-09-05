import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import useWindowDimensions from '../../../hooks/useWindowDimension';
import { ScheduleStatus } from '../../../enums/ScheduleStatus';

interface Props {}

interface State {
  status: ScheduleStatus;
}

const CalendarTemplate = (props: Props) => {
  const { height, width } = useWindowDimensions();
  const localizer = momentLocalizer(moment);
  const [state, setState] = useState<State>({ status: ScheduleStatus.ALL });
  const myEventsList = [
    {
      title: 'title',
      start: new Date(Date.now()),
      end: new Date(Date.now() + 27 * (60 * 60 * 1000)),
      allDay: false,
      color: '#8BEFE6',
    },
    // {
    //   title: 'title2',
    //   start: new Date(Date.now()),
    //   end: new Date(Date.now() + 2 * (60 * 60 * 1000)),
    //   allDay: false,
    //   color: '#8BEFE6',
    // },
    // {
    //   title: 'title4',
    //   start: new Date(Date.now()),
    //   end: new Date(Date.now() + 3 * (60 * 60 * 1000)),
    //   allDay: false,
    //   color: '#8BEFE6',
    // },
    {
      title: 'title4',
      start: new Date(Date.now()),
      end: new Date(Date.now() + 4 * (60 * 60 * 1000)),
      allDay: false,
      color: '#8BEFE6',
    },
    {
      title: 'title4',
      start: new Date(),
      end: new Date(),
      allDay: true,
      color: '#8BEFE6',
    },
  ];

  const updateStatus = (status: ScheduleStatus) => {
    setState({ ...state, status });
  };

  const StatusButton: React.FunctionComponent<{ status: ScheduleStatus }> =
    (props: { status: ScheduleStatus }) => {
      return (
        <button
          className="public-private-button"
          onClick={() => updateStatus(props.status)}
          style={
            state.status === props.status
              ? {
                  backgroundColor: '#1c1c1c',
                  boxShadow: '0px 3px 6px #1c1c1c16',
                }
              : {}
          }
        >
          {props.status}
        </button>
      );
    };

  return (
    <>
      <section className="section-calender">
        <span className="public-private-button-group">
          <StatusButton status={ScheduleStatus.ALL} />
          <StatusButton status={ScheduleStatus.PUBLIC} />
          <StatusButton status={ScheduleStatus.PRIVATE} />
        </span>
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
          popup={true}
          // resources={[
          //   { color: '#8BEFE6' },
          //   { color: '#FF5757' },
          //   { color: '#5A72FF' },
          // ]}
        />
      </section>
    </>
  );
};

export default CalendarTemplate;
