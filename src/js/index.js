import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

const renderCounter = (counter) => {
    const fourthDigit = Math.floor(counter / 1000);
    const thirdDigit = Math.floor(counter / 100);
    const secondDigit = Math.floor(counter / 10);
    const firstDigit = Math.floor(counter / 1);
    counter++;
    ReactDOM.render(
        <Home
            firstDigit={firstDigit}
            secondDigit={secondDigit}
            thirdDigit={thirdDigit}
            fourthDigit={fourthDigit}
            onStartCountdown={startCountdown}
            intervalId={intervalId}
        />,
        document.querySelector("#app")
    );
};

let counter = 0;
let intervalId = null;

// Función para iniciar la cuenta atrás
const startCountdown = () => {
    const input = document.querySelector("input[type='number']");
    let initialCount = parseInt(input.value, 10);
    if (isNaN(initialCount)) return;

    // Clear the initial counter interval
    clearInterval(intervalId);

    // Start the countdown
    intervalId = setInterval(() => {
        initialCount--;
        renderCounter(initialCount);
        if (initialCount <= 0) {
            clearInterval(intervalId);
        }
    }, 1000);
};

// Start the initial counter on page load
window.onload = () => {
    intervalId = setInterval(() => {
        counter++;
        renderCounter(counter);
    }, 1000);
};
