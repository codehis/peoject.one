
//this file is APP component for concept of use context,use effect and context


import React, { createContext } from "react";
import CompA from "./component/CompA";

const FirstName=createContext();
 const LastName=createContext();
 const Subject=createContext();



function App() {
  return (
    <React.Fragment>
      <FirstName.Provider value='Mohammad'>
        <LastName.Provider value="kareem">
       <Subject.Provider value="BCA">
       <CompA />
       </Subject.Provider>
        </LastName.Provider>
   
      </FirstName.Provider>
      
       
    </React.Fragment>
  );
}

export default App;
export {FirstName,LastName,Subject};
