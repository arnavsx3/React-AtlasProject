import React from "react";

export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const data = formData.entries()
    const formInputData = Object.fromEntries(data)
    console.log(formInputData)
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact us</h2>
      <div className="container contact-wrapper">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            name="message"
            className="form-control"
            placeholder="Enter your message"
            rows="10"
            required
            autoComplete="false"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
