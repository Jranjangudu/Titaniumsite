import React, { useState } from "react";
import "../App.css";
import Productinfos from "../Productinfos";


const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function Productitems(props) {
  const [cart, setcart] = useState([]); //set the cart
  const [page, setPage] = useState(PAGE_PRODUCTS); //mentaining page 
  const [heart, setheart] = useState(1); 
  const [openimage, setopenimage] = useState([]);// it set the image detels data goes to productinfo.jsx files 
  // here you mentain product, carts
  const addToCart = (product) => {
    setcart([...cart, { ...product }]);
    alert("Your card added successfully !");
  };
  // here you navigate the page product page and cart page
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  // here you handle image detels and return the productinfo.jsx files 
  let handleimage = (product) => {
    setopenimage([product]);
  };
  // here you delete the cart from cart page
  const removeFromCart = (productToremove) => {
    setcart(cart.filter((product) => product !== productToremove));
  };
  let style = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    backgroundColor: "blue",
    padding: "3px",
    color: "#fff",
    position: "relative",
    top: "-20px",
  };
  let handleheart = () => {
    setheart(heart + 1);
    document.getElementById("heart").innerHTML = heart;
    document.getElementById("heartuser").innerHTML = heart;
  };
  let styleitems = {
    width: "220px",
    height: "250px",
    objectFit: "cover",
    paddingLeft: "16px",
    cursor: "pointer",
  };
//product page render below
  const renderProducts = () => {
    return (
      <>
        <h2 className="text-center text-primary py-3">All products </h2>
       
        <div className="row1">
          <div
            className="col1"
            style={{ overflowX: "auto", scrollBehavior: "smooth" }}
          >
            <div style={{ display: "flex" }}>
              {props.data.map((product, index) => {
                return (
                  <div key={index}>
                    <img
                      src={product.image}
                      alt="laptop"
                      width="100%"
                      onClick={() => handleimage(product)}
                      style={styleitems}
                      className="card-img-to"
                    />
                    <div className="card-body ">
                      <h6>{product.name}</h6>
                      <p className="text-muted my-0">
                        <i className="fas fa-rupee-sign"></i>
                        <del>{product.oldprice}</del> <span> &#8211; </span>
                        <i className="fas fa-rupee-sign"></i>
                        {product.price}
                      </p>
                      <small>{product.rating}</small>
                      <br />

                      <button
                        className="btn btn-primary"
                        
                        onClick={() => addToCart(product)}
                      >
                        <i className="fas  fa-shopping-cart" />
                      </button>

                      <button
                        className="btn btn-primary ml-5 "
                        onClick={handleheart}
                      >
                        <i
                          className="fas fa-heart"
                          style={{ fontSize: "20px", color: "red" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };

//Carts page render below
  const renderCarts = () => {
    return (
      <>
        <h2 className="text-center text-danger py-3">Carts</h2>
        <div className="row1">
          <div
            className="col1"
            style={{ overflowX: "auto", scrollBehavior: "smooth" }}
          >
            <div style={{ display: "flex" }}>
              {cart.map((product, index) => {
                return (
                  <div key={index}>
                    <img
                      src={product.image}
                      alt="laptop"
                      width="100%"
                      style={styleitems}
                      className="card-img-to"
                    />
                    <div className="card-body">
                      <h6>{product.name}</h6>
                      <p className="text-muted my-0">
                        <i className="fas fa-rupee-sign"></i> {product.price}
                      </p>
                      <small>{product.rating}</small>
                      <br />
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(product)}
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <header className="mt-1">
          <button
            className="btn btn-success ml-3 "
            onClick={() => navigateTo(PAGE_CART)}
          >
            Go to cart
          </button>
          <i
            className="fas  fa-shopping-cart"
            style={{ fontSize: "22px", color: "#232426" }}
          ></i>
          <span style={style}>
            <strong>{cart.length}</strong>
          </span>
          <button
            className="btn btn-primary mt-1"
            onClick={() => navigateTo(PAGE_PRODUCTS)}
          >
            View product
          </button>
        </header>
      
        {page === PAGE_PRODUCTS && renderProducts()}{/* here the condition if page is equl to PAGE_PRODUCTS then it render  renderProducts() , if page is equl to  PAGE_CART then it render PAGE_PRODUCTS */}
        {page === PAGE_CART && renderCarts()}
    
        {page === PAGE_PRODUCTS && <Productinfos data={openimage} />} {/* here the <Productinfos/> component render only if page is equl to PAGE_PRODUCTS   */}
      </div>
    </>
  ); 
}

export default Productitems;
