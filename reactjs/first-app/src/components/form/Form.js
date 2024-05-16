import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
  });
  return (
    <div>
      <h1>React Form</h1>
      <form>
        <p>Enter Full name</p>
        <input
          type="text"
          placeholder="Enter full Name"
          value={value.name}
          onChange={(event) =>
            setValue((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <p>Enter Email</p>
        <input
          type="email"
          placeholder="Enter Email"
          value={value.email}
          onChange={(event) =>
            setValue((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <p>Enter Password</p>
        <input
          type="password"
          placeholder="Enter password"
          value={value.pass}
          onChange={(event) =>
            setValue((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <h2>{value.name}</h2>
        <h2>{value.email}</h2>
        <h2>{value.pass}</h2>
      </form>
    </div>
  );
};

export default Form;
