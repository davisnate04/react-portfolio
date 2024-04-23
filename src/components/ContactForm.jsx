import { useState } from "react";
import { validateEmail } from "./utils/helpers";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
        setName(inputValue)
    } else if (inputType === "email") {
        setEmail(inputValue);
    } else {
        setMessage(inputValue);
    }
  };

  const handleFocus = (e) => {
    const { target } = e;
    const inputType = target.name;

    switch (errorMessage) {
        case "Name is required.":
            if (inputType === "name") {
                setErrorMessage("");
            }
            return;
        case "Your email is invalid.":
            if (inputType === "email") {
                setErrorMessage("");
            }
            return;
        case "Message is required.":
            if (inputType === "message") {
                setErrorMessage("");
            }
            return;
        default:
            return;
    }
  };

  const blur = (e) => {
    const { target } = e;
    const inputType = target.name;

    switch (inputType) {
      case "name":
        if (name.trim() === "") {
          setErrorMessage(`Name is required`);
        }
        return;
      case "email":
        if (!validateEmail(email)) {
            setErrorMessage(`Your email is invalid.`);
        }
        return;
      case "message":
        if (message.trim() === "") {
            setErrorMessage(`Message is required.`);
        }
        return;
      default:
        setErrorMessage("");
        return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("Contacting has not been set up yet")
  };

  return (
    <form className="inline-grid" onSubmit={handleFormSubmit}>
      <div className="contactDiv inline-grid">
        <label htmlFor="name">Name:</label>
        <input name="name" id="name" type="text" onChange={handleInputChange} onFocus={handleFocus}  onBlur={blur}></input>
        <label htmlFor="email">Email address:</label>
        <input name="email" id="email" type="text" onChange={handleInputChange} onFocus={handleFocus} onBlur={blur}></input>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" onChange={handleInputChange} onFocus={handleFocus} onBlur={blur}></textarea>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <input type="submit" id="submit" value="Submit"></input>
    </form>
  );
}
