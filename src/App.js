import React from "react";
//Bootstrap location
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Footers from "./Footers";
import Menus from "./Menus";
import Offerss from "./Offerss";
function App() {
  return (
    <div style={{ width: "100%" }}>
      <Menus />
      <Offerss />
      <Footers />
    </div>
  );
}

export default App;
