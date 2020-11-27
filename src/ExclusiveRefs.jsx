import React, { useState } from "react";
import "./App.css";
import Product1 from "./asserts/Product/product1.png";
import Product2 from "./asserts/Product/product2.png";
import offers from "./asserts/Product/exclusive.png";
import Product6 from "./asserts/Product/product6.png";
import Product8 from "./asserts/Product/product8.png";
import Product7 from "./asserts/Product/product7.png";
import Exclusiveproductss from "./Exclusiveproductss";
function ExclusiveRefs() {
  let times = new Date().toLocaleTimeString();
  //here i set time options ;
  const [Times, setTime] = useState(times);
  const Updatetime = () => {
    let times = new Date().toLocaleTimeString();
    setTime(times);
  };
 //time interval for running time continuously ,it call Updatetime function every 1sec
  setInterval(Updatetime, 1000);
  const products = [
    { product: Product1 },
    { product: Product2 },
    { product: Product6 },
    { product: Product8 },
    { product: Product7 },
  ];
  return (
    <div>
      <Exclusiveproductss productitem={products} />
      <div
        className="card mb-3 offersbackground container mt-3"
        style={{ maxWidth: "100%" }}
      >
        <div className="row no-gutters ">
          <div className="col-md-4 ">
            <img src={offers} className="ml-5" alt="exclusive" width="60%" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5>ExclusiveOffers available on Titanium {Times}</h5>
              <h1>&#x275B; Smart Watch &#x275C;</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo ex ipsa aperiam, corporis aliquid tempore corrupti
                totam quaerat fuga tempora, doloremque iusto consectetur. Nihil
                atque debitis et unde quam error.
              </p>
              <button className="btn badge badge-pill badge-danger py-2 px-5 round ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveRefs;
