import React, { Fragment, useState } from "react";
import "./DomainName.css";
const DomainName = ({ onAddName }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [lastnameIsValid, setLastNameIsValid] = useState(true);
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastname(event.target.value);
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    const infomation = {
      name: name,
      lastname: lastname,
    };
    if (name.trim() === "") {
      setNameIsValid(false);
      // alert('enter a name')

      return;
    }
    if (!lastname) {
      setLastNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    setLastNameIsValid(true);
    console.log(name);
    onAddName(infomation);
    setName("");
    setLastname("");
  };

  return (
    <Fragment>
      <h1 style={{ fontSize: 29 }}> Our Mission</h1>
      <p style={{ fontSize: 26 }}>
        {" "}
        Animal Center’s passionate belief that animals help people and people
        help animals through trust, unconditional love, and respect creates a
        legacy of caring. Sharing this philosophy with others, the Center
        inspires and teaches, locally and globally, the importance of the
        animal-human bond. our nationally recognized Center provides a variety
        of services that benefit the community through educational and
        therapeutic programs for people, and humane care and adoption for
        animals.
      </p>
      <div className="wrapper">
        <div className="item card">
          <form onSubmit={formOnSubmitHandler}>
            <label htmlFor="fname">First Name</label>
            <input
              style={{ backgroundColor: !nameIsValid ? "blue" : "" }}
              onChange={nameHandler}
              type="text"
              id="fname"
              name="firstname"
              value={name}
              placeholder="Your name.."
            />
            {!nameIsValid && (
              <p style={{ color: "black", textAlign: 'center' }}>enter name</p>
            )}

            <label>Last Name</label>
            <input
              style={{ backgroundColor: !lastnameIsValid ? "red" : "" }}
              onChange={lastNameHandler}
              type="text"
              id="lname"
              name="lastname"
              value={lastname}
              placeholder="Your last name.."
            ></input>
            {!lastnameIsValid && <p>Please enter password</p>}

            <label>Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <input type="submit" value="Submit" ></input>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default DomainName;
