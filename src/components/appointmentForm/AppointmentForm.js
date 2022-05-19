import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = (props) => {
  const {
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,
  } = props;

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={handleTitleChange}
      />
      <ContactPicker contacts={contacts} onchange={handleContactChange} />
      <input
        type="date"
        value={date}
        placeholder="Date"
        onChange={handleDateChange}
        min={getTodayString()}
      />
      <input
        type="time"
        value={time}
        placeholder="Time"
        onChange={handleTimeChange}
      />
      <input type="submit" value="Add Appointment!" />
    </form>
  );
};
