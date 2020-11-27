import React, { useState } from "react";
import Sectioncards from "./Sectioncards";

function Sections() {
  // here i set the time options
  let timing = new Date().toLocaleTimeString();
  const [Times, setTime] = useState(timing);
  const Updatetime = () => {
    let timing = new Date().toLocaleTimeString();
    setTime(timing);
  };
  //setinterval it call the updatetime functions every 1sec ;; 1000 ms = 1sec
  setInterval(Updatetime, 1000);
  let listOfImage = [
    {
      img:
        "https://images.unsplash.com/photo-1521939094609-93aba1af40d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      info: "End's in 12 dec 20",
      times: Times,
    },
    {
      img:
        "https://images.unsplash.com/photo-1550367083-9fa5411cb303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      info: "End's in 04 feb 21",
      times: Times,
    },
    {
      img:
        "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      info: "End's in 12 dec 2020",
    },
    {
      img:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      info: "End's in 12 dec 2020",
      times: Times,
    },
    {
      img:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      info: "End's in 18 dec 2020",
    },
    {
      img:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      info: "End's in 01 dec 2021",
    },
  ];
  return (
    <div>
      {/* here  <Sectioncards items={listOfImage} /> component render*/}
      <Sectioncards items={listOfImage} />
    </div>
  );
}

export default Sections;
