import React, { useState } from "react";
import Input from "./Inputs/Input";
import bck from "./assets/bck.png";
import "./app.css";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmation: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Please enter a username",
      label: "Username",
      after: "*",
      errorMessage:
        "Username should be between 3 and 10 characters include at least 1 letter and shouldn't include special characters",
      pattern: "^(?=.*[a-zA-Z])[A-Za-z0-9]{3,10}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Please enter your email",
      after: "*",
      label: "Email",
      errorMessage: "Plase enter a valid email adress",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Please enter your birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Please enter password",
      after: "*",
      label: "Password",
      errorMessage:
        "Password should be from 8-20 characters long and include atleast : 1 uppercase and lowercase letter, 1 digit and one special character",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmation",
      type: "password",
      placeholder: "Please confirm your password",
      after: "*",
      label: "Confrim password",
      errorMessage: "Passwords do not match",
      pattern: values.password,
      required: true,
    },
  ];

  const submithandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="app-container">
      <div className="form-container">
        <div className="left-bck">
          <img className="image" src={bck} alt="night" />
        </div>
        <div className="right-form">
          <h2>Create An Account</h2>
          <form onSubmit={submithandler}>
            {inputs.map((input) => (
              <Input
                key={input.id}
                onChange={onChangeHandler}
                name={input.name}
                label={input.label}
                after={input.after}
                placeholder={input.placeholder}
                type={input.type}
                value={values[input.name]}
                errorMessage={input.errorMessage}
                required={input.required}
                pattern={input.pattern}
              />
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
