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
    subject: '',
    message: '',
  });
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);

  const initialState = { name: '', email: '', subject: '', message: '' };
  const { name, email, subject, message } = formState;

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
    <section id="contact">
      <form onSubmit={handleSubmit}>
        {success && 'Thank you, form has been submitted!'}
        {failure && 'Sorry, Something went wrong!'}
        <div className="background">
          <div className="container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>CONTACT</span>
                    <span>ME</span>
                  </div>
                  <div className="contact">
                    <p>Wanna work together? </p>
                    <p>Send me an email at </p>
                    <a href="mailto:dhandvaasu@gmail.com" className="email">
                      dhandvaasu@gmail.com
                    </a>
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="NAME"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="EMAIL"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="SUBJECT"
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="app-form-group message">
                      <textarea
                        className="app-form-control"
                        placeholder="MESSAGE"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button
                        className="app-form-button button-transparent"
                        type="button"
                        onClick={() => setFormState(initialState)}
                      >
                        CLEAR
                      </button>
                      <button
                        className="app-form-button button-purple"
                        type="submit"
                      >
                        SEND
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
