import React from 'react';

export const ContactPicker = (props) => {
  const list = props.contacts;

  const options = list.map((info, index) => {
    return <option key={index + 1}>{info.name}</option>;
  });

  return (
    <select onChange={props.setContacts} placeholder="Contacts">
      <option key="0" value="Default" selected="selected"></option>
      {options}
    </select>
  );
};
