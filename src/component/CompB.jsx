import React, { useContext } from "react";
// import CompC from "./CompA";
import { FirstName, LastName } from "../App";
import { Subject } from "../App";

// useContext is overcome of creatcontext because in conponet c conten long code for long data transfer
const CompB = () => {
  const Fname = useContext(FirstName);
  const Lname=useContext(LastName);
  const Csub=useContext(Subject)
  return (
    <React.Fragment>
      <h1>my name is {Fname} {Lname} {Csub}</h1>
      
      
    </React.Fragment>
  );
};

export default CompB;
