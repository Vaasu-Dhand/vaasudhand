import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';

export default function Contact() {
  const encode = (data: any) => {
    // ? I've set any type explicilty
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  // Hooks
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const initialState = { name: '', email: '', message: '' };
  const { name, email, message } = formState;
  
  // Event Handlers
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formState }),
      });
      setSuccess(true);
      setFormState(initialState); // * State is not clearing up!
    } catch (error) {
      console.error(error);
      setFailure(true);
    }
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit}>
      {success && 'Thank you, form has been submitted!'}
      {failure && 'Sorry, Something went wrong!'}
      <p>
        <label>
          Your Name:{' '}
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your Email:{' '}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{' '}
          <textarea name="message" value={message} onChange={handleChange} />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
