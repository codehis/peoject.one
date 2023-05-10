import React from 'react'
// import remove from'./remove.png'
// import AddCircleIcon from '@mui/icons-material/AddCircle';


const Notelist=(props)=> {

  return (
   
    <React.Fragment>

<div className="cart" >

<li>{props.vdata}  
<button id='btn2' onClick={()=>{
    return props.onselect(props.id)
  }}>   <img src='https://www.shutterstock.com/image-vector/trash-delete-icon-isolated-on-260nw-1937456671.jpg' alt="" /></button></li>

</div>



 


    </React.Fragment>
  )
}

export default Notelist;
