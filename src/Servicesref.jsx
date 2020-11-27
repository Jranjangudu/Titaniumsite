import React from "react";
import "./App.css";
function Servicesref(props) {
  return (
    <div>
      <div className="container-fluid">
        <h3 className="text-center mt-5 mb-4" style={{ color: "#848484" }}>
          Hello. What can we help you with?
        </h3>
        <hr />
        <div className="row">
          {props.Data.map((data, i) => (
            <div
              key={i}
              className="media media_hover col-sm-3 border ml-3 mt-4"
            >
              <img
                src={data.image}
                className="mr-3"
                alt="imageitem"
                width="60px"
              />
              <div className="media-body">
                <h5 className="mt-0">{data.heading}</h5>
                <small>{data.description}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicesref;
