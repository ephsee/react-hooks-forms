import React, { useState } from "react";
import NewForm from "./newForm"

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstName(event){
    setFirstName(event.target.value)
    console.log(event.target.value)
  }

  function handleLastName(e) {
    setLastName(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
    <div>
    <form>
      <input type="text" value={firstName} onChange={handleFirstName}/>
      <input type="text" value={lastName} onChange={handleLastName}/>
      <button type="submit">Submit</button>
    </form>
    </div>
    <hr></hr>
    <NewForm />
    </div>
  );
}

export default Form;
