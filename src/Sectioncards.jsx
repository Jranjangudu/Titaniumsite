import React from "react";

function Sectioncards(props) {
  let styleitems = {
    width: "220px",
    height: "250px",
    objectFit: "cover",
    paddingLeft: "16px",
  };
  return (
    <div className="container-fluid">
      <h2 className=" mt-5 mb-3 text-center text-dark">Blockbuster Deals</h2>
      <div className="row1 container">
        <div
          className="col1"
          style={{ overflowX: "scroll", scrollBehavior: "smooth" }}
        >
          <div style={{ display: "flex" }}>
            {props.items.map((item, i) => (
              <div key={i} className="itemhover">
                <img src={item.img} alt="imageitem" style={styleitems} />
                <small className="pl-4">{item.info}</small>
                <br />
                <small className="ml-4">{item.times}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectioncards;
