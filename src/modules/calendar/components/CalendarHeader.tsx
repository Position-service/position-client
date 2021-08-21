import React from 'react';
import '../css/CalendarHeader.css';
import ModeButton from './ModeButton';

interface Props {}

const CalendarHeader: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      <ModeButton title="All" selected={true} buttonHandler={() => {}} />
    </div>
  );
};

export default CalendarHeader;
