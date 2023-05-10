import React from "react";

const Notes = (props) => {
  return (
    <React.Fragment>
      <div className="middle">
        <div id="mid">
          {/* <input  type="text" placeholder="Title" id="into"  onChange={props.title}/> */}
          <textarea
            placeholder="Create a Notes"
            onChange={props.text}
          >
            
          </textarea>
         
        
        </div>
        
        <div className="btn">
        <button id="btn" onClick={props.finaltext}>
              <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/add.png" alt="" />
            </button>
           
            <button id="btn1" onClick={props.alldelete}>
              
            <img src='https://www.shutterstock.com/image-vector/trash-delete-icon-isolated-on-260nw-1937456671.jpg' alt="err" />
            </button>
          </div>
        
      </div>
    </React.Fragment>
  );
};

export default Notes;
