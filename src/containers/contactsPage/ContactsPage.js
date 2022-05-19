/*
This is a stateful component that will handle the logic for adding new contacts and listing current contacts

-Receives 2 props: 
  -Current list of contacts (contacts)
  -Callback function for adding a new contact (addContact())

-Must keep track of three local state vars: name, ph#, email 
-Must check for duplicates whenever the name in the form changes and indicate if name is a duplicate
-If name is a duplicate do not allow submission
-Clear form on successful submission 
-In "Add Contact" section: render <ContactForm /> with:
  -local state vars (name, ph#, email)
  -local state var setter functions
  -handleSubmit callback
-In "Contacts" section render <TileList /> with the contact array passed in via props 
*/

import { React, useState, useEffect } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      props.addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (props.contacts.find((c) => c.name !== name)) {
      setDuplicate(false);
    } else {
      setDuplicate(true);
    }
  }, [props.contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
