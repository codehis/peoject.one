import React from "react";

const List = (props) => {
  
  return (
    <React.Fragment>
    
            <>
            
              <li>
                <button onClick={()=>{
                    props.onSelect(props.id)
                }}>-</button>
                {props.text}
               
              </li>
            </>
        
    </React.Fragment>
  );
};


export default List;