import React from 'react';

export const ContactForm = (props) => {
  const { name, setName, phone, setPhone, email, setEmail, handleSubmit } =
    props;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <input
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Tel#"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input type="submit" value="Add Contact!" />
    </form>
  );
};
