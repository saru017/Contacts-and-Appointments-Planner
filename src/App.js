/*
App is a stateful component that handles the routing between the two pages: ContactPage and AppointmentPage

App must:
-keep track of contacts and appointments data, both being an array of objcts
-Define a callback function that adds contact data to the contact data array incuding:
  -name
  -ph #
  -email
-Define a callback fucntion that adds appointment data to the appointment data aray:
  -title
  -contact
  -date
  -time
-Pass array of contacts and appropriate call back function to the ContactsPage component <ContactsPage />
-Do the same for the the AppointmentsPage component <AppointmentsPage />

*/

import { React, useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([
    {
      name: 'test tester',
      phone: '(###)-###-####',
      email: 'xxxx.xxxxx@xxxxx.com',
    },
    {
      name: 'test tester',
      phone: '(###)-###-####',
      email: 'xxxx.xxxxx@xxxxx.com',
    },
  ]);
  const addContact = (name, phNum, email) => {
    setContacts((prev) => [
      { name: name, phone: phNum, email: email },
      ...prev,
    ]);
  };

  const [appointments, setAppointments] = useState([
    {
      title: 'test title',
      contact: 'test tester',
      date: 'xx/xx/xxxx',
      time: 'xx:xx:xx',
    },
  ]);
  const addAppointment = (title, contact, date, time) => {
    setAppointments((prev) => [
      { title: title, contact: contact, date: date, time: time },
      ...prev,
    ]);
  };

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage addContact={addContact} contacts={contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
