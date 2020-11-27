import React, { useState } from "react";

import Productitems from "./Productitems";

function Productitemsref() {
  const [products] = useState([
    {
      name: "HP 10th Gen Intel Core i3 15.6-inch Laptop",
      oldprice: "34,999.00",
      price: "32,000.00",
      rating: "⭐⭐⭐⭐",
      discount:'FREE Delivery',
      image:
        "https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008__340.jpg",
     
    },
    {
      name: "Nokia Max",
      oldprice: "30,999.00",
      price: "29,999.00",
      rating: "⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1550367083-9fa5411cb303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
     
    },
    {
      name: "Zink london womens dress",
      oldprice: "1,299.00",
      price: "1,999.00",
      rating: "⭐⭐⭐⭐",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcx4xBhKkaw3qyctZErAeJNfAy2XvCrO92z0PPFDOtzF6uXE_3hO_0NIdguKugLenLLqxFVCFLY5gEAKLIZac4cWzgZb_QroF2LfOiFr9oY8EDcHcvgj4j&usqp=CAc",
    },
    {
      name: "stylish blue-gray colored designer",
      oldprice: "1,499.00",
      price: "1,299.00",
      rating: "⭐⭐⭐⭐",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVXJ493p0BmGBmOHPQ3lahGG5Km0tHe9L8OhM5BzE-FfeuFBtYpHbvoQtcgITmaiRSFUlPhgMBChSn99lOoeRHYw1dg_INqCTjZqEtJm4J&usqp=CAc",
    },
    {
      name: "Mac Book ProMax",  
      oldprice: "98,999.00",
      price: "94,999.00",
      rating: "⭐⭐⭐⭐⭐",
      discount:'FREE Delivery',
      image:
        "https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131__340.jpg",
    },
    {
      name: "T-Shirt for Men",
      oldprice: "899.00",
      price: "699.00",
      rating: "⭐⭐⭐⭐",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcReDqsw4l7ERvSl2awywbExneJG5QwMrI6PDu1rwf3S6topmrvnzuADAXB3Ci1bwsLQNCYuzXOSq_BJgcmeFDYBgSpTjBI-Wha81j5p3q4&usqp=CAc",
    },

    {
      name: "print mafias Men's ",
      oldprice: "999.00",
      price: "699.00",
      rating: "⭐⭐⭐⭐",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/719xj5qGa5L._UX679_.jpg",
    },
    {
      name: "Dresses for Ladies",
      oldprice: "1,999.00",
      price: "1,299.00",
      rating: "⭐⭐⭐⭐",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HXSkcHM8KrA23TLFG-EGOEkOGHcR1sU7cg&usqp=CAU",
    },
    {
      name: "One Plus Nord,256GB",
      oldprice: "30,999.00",
      price: "26,999.00",
      discount:'FREE Delivery',
      rating: "⭐⭐⭐⭐",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tUil_ApZsHTwqYJyeYUg7JpsgHvqKVl9xO_HeWbUBhAeZQhTrPZIvWb79IaC9BQxgOOXvlY&usqp=CAc",
    },

    {
      name: "New Apple Iphone 12Pro",
      oldprice: "140,000.00",
      price: "139,000.00",
      rating: "⭐⭐⭐⭐⭐",
      discount:'FREE Delivery',
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67YJgkBR20zPyM3f6wulcg18E1ztZvIJ4p6DTaQlmZzDmQTQ4BQnCOtS4KSoOQHa_Vwx4PuSB&usqp=CAc",
    
    },
    {
      name: "Solid Men's Shawl Collar Regular Fit T-Shirt",
      oldprice: "700.00",
      price: "400.00",
      rating: "⭐⭐⭐⭐",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/412LejGpZrL._SX342_.jpg",
    },
  ]);
  return (
    <div>
      <Productitems data={products} />
    </div>
  );
}

export default Productitemsref;
