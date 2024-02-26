import { CalendarDisplay, AddEventButton } from '../components/calendar/index';
import BackLink from '../components/common/back-links/BackLink';

const Calendar = () => {
  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden bg-background inset-0 w-full h-full min-h-screen">
        <BackLink to="/dashboard" label="main dashboard" />
        <div className="flex flex-col justify-center items-center text-center mx-auto w-[90%]">
        <h1 className="text-4xl md:text-5xl font-bold font-title w-[90%] mb-3">Calendar</h1>
        <CalendarDisplay />
    </div>
    </div>
  )
}

export default Calendar;
