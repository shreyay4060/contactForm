import React, { useState } from "react";

export default function Form() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [info, setInfo] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setInfo(contact);
    setContact({
      fName: "",
      lName: "",
      email: "",
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>
          Hello {info.fName} {info.lName}
        </h1>
      </div>

      <p style={{ color: "white" }}>{info.email}</p>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          type="text"
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <br />
        <br />
        <button onClick={handleClick} style={customStyle}>
          Submit
        </button>
      </div>
    </div>
  );
}

const customStyle = {
  padding: "10px",
};
