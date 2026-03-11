import React from "react";

export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const data = formData.entries() //data becomes key value pairs [[1,"A"],[2,"B"]]
    const formInputData = Object.fromEntries(data) //key value pairs become js object
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
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            name="message"
            className="form-control"
            placeholder="Enter your message"
            rows="10"
            required
            autoComplete="off"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
