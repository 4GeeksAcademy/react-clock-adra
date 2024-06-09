//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(function () {
    const fourthDigit = Math.floor(counter / 1000);
    const thirdDigit = Math.floor(counter / 100);
    const secondDigit = Math.floor(counter / 10);
    const firstDigit = Math.floor(counter / 1);
    counter++;
    console.log(fourthDigit, thirdDigit, secondDigit, firstDigit);
    ReactDOM.render(
        <Home
            firstDigit={firstDigit}
            secondDigit={secondDigit}
            thirdDigit={thirdDigit}
            fourthDigit={fourthDigit}
        />,
        document.querySelector("#app")
    );
}, 1000);
