import React, { useState } from "react";
import Videos from "./Videos";
import ProductsRandF from "./ProductsRandF";

function Productinfos(props) {
  //it handle the promocode that enter user
  const [Promocodes, setPromocode] = useState("");
  //it handle the user click events and set the user input promocode;
  const [state, setstate] = useState("");
  //it handle the user input onchange events and set the input in promocode
  let handlepromocode = (e) => {
    setPromocode(e.target.value);
  };
  // it handle tha click button 
  let handlestate = () => {
    setstate(Promocodes);
    // it empty the input value field
    setPromocode("");
  };

  return (
    <div className="container-fluid">
      {props.data.map((items, i) => {
        return (
          <div className="row" key={i}>
            <div
              className="col-sm-4 shadow-lg p-3 mb-5 bg-white rounded"
              style={{
                height: "auto",
                textAlign: "left",
              }}
              key={i}
            >
              <img
                src={items.image}
                alt="items"
                width="100%"
                height="400px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-sm-5 card ">
              <div className="card-body">
                <h4>{items.name}</h4>
                <small>Visit the shopping Store</small>
                <p>
                  {items.rating}
                  <span> 507 ratings | 95 answered questions</span>
                </p>
                <hr />
                <p>
                  price: <i className="fas fa-rupee-sign"></i>
                  <span className="text-danger">
                    <strong>{items.price}</strong>
                  </span>
                  <b> {items.discount}</b>
                </p>
                <em>Inclusive of all taxes</em>
                <br />
                <small>
                  Delivery by: <b>Friday,Non 21</b>
                  <a href="#top"> Deteils</a>
                </small>
                <p>
                  <b>EMI</b> starts at ₹2,165. No Cost EMI available
                </p>
                <div className="row">
                  <div className="card ml-2">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png"
                      alt="Emi logo"
                      width="50px"
                    />
                    <small>
                      <a href="#top">No contact</a>
                    </small>
                    <small>
                      <a href="#top">Delivery</a>
                    </small>
                  </div>
                  <div className="card ml-3">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                      alt="Emi logo"
                      width="50px"
                    />
                    <small>
                      <a href="#top">7 Days</a>
                    </small>
                    <small>
                      <a href="#top">Replacement</a>
                    </small>
                  </div>
                  <div className="card ml-3">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
                      alt="Emi logo"
                      width="50px"
                    />

                    <small>
                      <a href="#top">Titanium </a>
                    </small>
                    <small>
                      <a href="#top">Delivery </a>
                    </small>
                  </div>
                  <div className="card ml-3">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
                      alt="Emi logo"
                      width="50px"
                    />

                    <small>
                      <a href="#top">1 years </a>
                    </small>
                    <small>
                      <a href="#top">Warranty</a>
                    </small>
                  </div>
                </div>
                <small>
                  Save up to 28% with GST input credit <br />
                  <a href="#top">Sign in/Create a free business account</a>
                </small>
              </div>
            </div>
            <div className="col-sm-3 card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <div
                  style={{
                    height: "40px",
                    width: "100%",
                    backgroundColor: "#E9E9E9",
                    textAlign: "center",
                  }}
                >
                  <p className="pt-2">
                    <input type="radio" name="choose" className="mr-4" /> with
                    exchange
                  </p>
                </div>
                <p className="pt-2 text-center">
                  <input type="radio" name="choose" className="mr-1" /> without
                  exchange <br />
                  <i className="fas fa-rupee-sign"></i>
                  <span className="text-danger">{items.price} </span>
                  <small>
                    <i className="fas fa-rupee-sign"></i> <del> 0.00</del>
                  </small>
                </p>
                <button className="btn btn-warning w-100 mt-2">
                  <i className="fas fa-shopping-cart"></i>Add To cart
                </button>
                <button className="btn btn-warning w-100 mt-2 mb-2">
                  <i className="fas fa-money-check-alt "></i> Buy Now
                </button>
                <small>
                  <a href="#top">share</a>
                  <i className="far fa-envelope ml-3"></i>
                  <i className="fab fa-facebook-square ml-2"></i>
                  <i className="fab fa-twitter ml-2"></i>
                  <i className="fab fa-pinterest ml-2"></i>
                </small>
                <br />
                <small>
                  <i className="fas fa-lock"></i> Secure transaction
                </small>
                <br />
                <input type="checkbox" /> <small>Add gift options</small> <br />
                <a href="#top">
                  <small>
                    <i className="fas fa-map-marker-alt"></i> select delivery
                    location
                  </small>
                </a>
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Enter promocode"
                  aria-label="Search"
                  value={Promocodes}
                  onChange={handlepromocode}
                />
                <button className="btn btn-danger mt-2" onClick={handlestate}>
                  Enter
                </button>
                <button className="btn btn-light w-100 mt-5">
                  add to wish list
                </button>
              </div>
            </div>
            {/* here the inline condition if state is null it don't show anythings, if state value is equal to  LODULALIT then it render <Videos /> component */}
            {state === "LODULALIT" ? <Videos /> : null}
            {/* here it render / call  <ProductsRandF /> components */}
            <ProductsRandF />
          </div>
        );
      })}
    </div>
  );
}

export default Productinfos;
