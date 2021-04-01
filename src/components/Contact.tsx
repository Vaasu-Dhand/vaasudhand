import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'

export default function Contact() {

  const encode = (data: any) => { // ? I've set any type explicilty
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  /* Here’s the juicy bit for posting the form submission */

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

    const { name, email, message } = formState;
    return (
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }

