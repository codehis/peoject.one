import React from "react";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Notes from "./component/Notes";
import Notelist from "./component/Notelist";

const App = () => {

const[Note,SetNote]=useState()
const[finalNote,setFinalnote]=useState([])

const finalAdd=()=>{
  setFinalnote((olddata)=>{
    return [...olddata,Note]
  })
}

const partialAdd=(event)=>{
    SetNote(event.target.value)
}
const deleteid=(id)=>{
 
setFinalnote((olddata)=>{
  return olddata.filter((aray,index)=>{
    return index!==id;
  })
})
}
const deleteall=()=>{
  setFinalnote((olddata)=>{
    return olddata.filter((ar)=>{
      return null
    })
 })
  
}


  return (
    <React.Fragment>
    
      <Navbar />
     
        
    
     <Notes  alldelete={deleteall} text={partialAdd} finaltext={finalAdd}/>
   {/* <Notelist  select={finalNote}/> */}

   <div className="listdata">

  {finalNote.map((data,index)=>{
   return <Notelist vdata={data} key={index} id={index} onselect={deleteid}/>
  
  })}
 
   
</div>
     
      
    

    </React.Fragment>
  );
};
export default App;
