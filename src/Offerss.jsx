import React from "react";
import Redmi from "./asserts/banners/Redmi.gif";
import Oneplus from "./asserts/banners/Oneplus.gif";

function Offerss() {
  return (
    <div className="container mt-5">
      <h3 className="text-primary text-center mb-4">
        &#9728; DIWALI DHAMAKA &#9787; &#9728;
      </h3>
      <img src={Redmi} alt="img" width="100%" />
      <hr />
      <img src={Oneplus} alt="img" width="100%" />
    </div>
  );
}

export default Offerss;
