import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimePicker from 'react-time-picker';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Modal } from 'react-responsive-modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './AddEventForm.css';

const CreateEventForm = ({
  isOpen,
  onClose,
  events,
  updateEvents,
  eventsArrayLength,
}) => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');
  const [allDay, setAllDay] = useState(false);

  const closeIcon = (
    <svg fill="#841F52" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4"
        stroke="#841F52"
        strokeWidth="3"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const schema = z.object({
    eventTitle: z.string().nonempty({ message: 'Event title is required' }),
    eventDescription: z
      .string()
      .nonempty({ message: 'Event description is required' }),
    eventStartDate: z.
      string()
      .nonempty({ message: 'Start date is required' }),
    eventEndDate: z
    .string()
    .nonempty({ message: 'End date is required' }),
    eventStartTime: z.string().nonempty({ message: 'Start time is required' }),
    eventEndTime: z.string().nonempty({ message: 'End time is required' }),
    allDay: z.boolean().optional()
    });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = async (formData) => {
    try {
      const formattedStartDate = format(startDate, 'yyyy-MM-dd');
      const formattedEndDate = format(endDate, 'yyyy-MM-dd');
      const formattedStartTime = startTime;
      const formattedEndTime = endTime;
  
      const newEvent = {
        eventTitle: formData.eventTitle,
        eventDescription: formData.eventDescription,
        eventStartDate: formattedStartDate,
        eventEndDate: formattedEndDate,
        eventStartTime: formattedStartTime,
        eventEndTime: formattedEndTime,
        allDay: allDay,
      };
  
      console.log('Events: ', events);
      console.log('Form data: ', formData);
      console.log('New event created: ', newEvent);
  
      // Update events array
      const updatedEvents = [...events, newEvent];
      updateEvents(updatedEvents);
  
      // Reset form fields
      reset();
  
      onClose();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        onClose();
        reset();
      }}
      center
      closeIcon={closeIcon}
      classNames={{
        overlay: 'customOverlay',
        modal: 'customModal',
      }}
    >
      <div className="form-container">
        <div className="form-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group pb-5">
            <div className="flex flex-row justify-center items-center gap-3 w-full">
              <label htmlFor="eventTitle" className="font-body font-bold text-primary text-xl pr-2">
                Event Title:
              </label>
              <input
                {...register('eventTitle', { required: true })}
                type="text"
                className="form-control"
                id="eventTitle"
                placeholder="Enter event title"
              />
              </div>
               <div className="error-message justify-center text-right text-red-500 italic font-body text-md">
                {errors?.eventTitle?.message}
              </div>
            </div>

            <div className="form-group pb-5">
              <div className="flex flex-row justify-center items-center gap-3 w-full">
                <label htmlFor="eventDescription" className="font-body font-bold text-primary text-xl pr-2">
                  Event Description:
                </label>
                <textarea
                  {...register('eventDescription', { required: true })}
                  className="form-control h-32 w-full"
                  id="eventDescription"
                  placeholder="Enter event description"
                ></textarea>
              </div>
              <div className="error-message justify-center text-right text-red-500 italic font-body text-md">
                {errors?.eventDescription?.message}
              </div>
            </div>

            {/* Start Date */}
            <div className="form-group pb-5">
            <div className="flex flex-row justify-center items-center gap-3 w-full">
              <label className="font-body font-bold text-primary text-xl pr-2">Start Date:</label>
              <DatePicker
                {...register('eventStartDate', { required: true })}
                selected={startDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setStartDate(date)}
                className="form-control"
              />
              </div>
               <div className="error-message justify-center text-right text-red-500 italic font-body text-md">
                {errors?.eventStartDate?.message}
              </div>
            </div>

            {/* End Date */}
            <div className="form-group pb-5">
            <div className="flex flex-row justify-center items-center gap-3 w-full">
              <label className="font-body font-bold text-primary text-xl pr-2">End Date:</label>
              <DatePicker
                {...register('eventEndDate', { required: true })}
                selected={endDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setEndDate(date)}
                className="form-control"
              />
              </div>
               <div className="error-message justify-center text-right text-red-500 italic font-body text-md">
                {errors?.eventEndDate?.message}
              </div>
            </div>

            {/* Start Time */}
            <div className="form-group pb-5">
            <div className="flex flex-row justify-center items-center gap-3 w-full">
              <label className="font-body font-bold text-primary text-xl pr-2">Start Time:</label>
              <TimePicker
                {...register('eventStartTime', { required: true })}
                value={startTime}
                onChange={setStartTime}
                className="form-control"
              />
              </div>
              <div className="error-message">
                {errors?.eventStartTime?.message}
              </div>
            </div>

            {/* End Time */}
            <div className="form-group pb-5">
            <div className="flex flex-row justify-center items-center gap-3 w-full">
              <label className="font-body font-bold text-primary text-xl pr-2">End Time:</label>
              <TimePicker
                {...register('eventEndTime', { required: true })}
                value={endTime}
                onChange={setEndTime}
                className="form-control"
              />
              </div>
              <div className="error-message">
                {errors?.eventEndTime?.message}
              </div>
            </div>

            {/* All Day Checkbox */}
            <div className="form-group pb-5">
              <label htmlFor="allDay" className="font-body font-bold text-primary text-xl pr-2">
                All Day: 
              </label>
              <input
                {...register('allDay')}
                type="checkbox"
                id="allDay"
                name="allDay"
              />
            </div>

            {/* Submit Button */}
            <div className="submit-button-container">
              <button type="submit" className="bg-tertiaryDark hover:bg-secondaryDark text-white font-bold py-2 px-4 rounded-xl mt-4">
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CreateEventForm;
