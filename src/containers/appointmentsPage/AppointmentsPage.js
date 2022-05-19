/* 
-This page recieves three props: 
  -The current list of appointments (appointments)
  -The current list of contacts (contacts)
  -A callback function for adding a new appointment (addAppointment)

-In turn this page will keep track of the 4 local state vars for title, contact, date and time that are entered into the form
-Form needs to be cleared on submit
-Add a new appointment on form submission
-Add Appointment section renders <AppointmentForm /> while passing the following props:
  -Local state variables
  -Local state variable setter functions
  -handleSubmit callback 
-Appointments section renders <TileList /> with appointment array passed in via props like contactpage
*/

import { React, useState, useEffect } from 'react';
import { TileList } from '../../components/tileList/TileList';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const appList = props.appointments;
  const contacts = props.contacts;

  const [appointments, setAppointments] = useState();
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  //handleSubmit should call callback function for adding a new appt with data from the form, and should also reset the appointment info state vars to default state
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={appList} />
      </section>
    </div>
  );
};
