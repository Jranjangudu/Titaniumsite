import React from "react";

function Exclusiveproductss(props) {
  return (
    <div className="container">
      <h4 className="mt-4">Exclusiveproducts</h4>
      <div className="row">
        {props.productitem.map((items, i) => {
          return (
            <div className="card col-sm-2 ml-4 mt-2" key={i}>
              <img
                src={items.product}
                alt="Exclusiveproduct"
                width="100%"
                height="150px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exclusiveproductss;
