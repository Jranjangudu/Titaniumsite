import React from 'react'
import "./Commingprocss.css";
function Commingpro(props) {
  let styleitem={
    width:"220px",
    height:"200px",
    objectFit:"cover",
    paddingLeft:"16px"
    
  }
  return (
    <div className="container-fluid">
      <h3 className="text-center mt-4 mb-4 text-info">OF COMMING PRODUCT's .! </h3>
      <div className="row1 container">
        <div className="col1" style={{overflowX:"scroll",scrollBehavior:"smooth" }} >
          <div style={{display:"flex"}} >
          {props.items.map((item,i)=>
          <div key={i} className="itemhover"><img src={item.img} alt="imageitem" style={styleitem}/></div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commingpro
