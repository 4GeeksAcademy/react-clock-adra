import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = (props) => {
    const stopCounter = () => {
        clearInterval(props.intervalId); // Detener el contador
    };

    return (
        <div className="home">
            <div className="bigClock d-flex justify-content-center">
                <div className="image">
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div className="fourthDigit">{props.fourthDigit % 10}</div>
                <div className="thirdDigit">{props.thirdDigit % 10}</div>
                <div className="secondDigit">{props.secondDigit % 10}</div>
                <div className="firstDigit">{props.firstDigit % 10}</div>
            </div>
            <div className="input-group my-2 input-section d-flex">
                <input
                    type="number"
                    min="0"
                    max="9999"
                    className="form-control"
                    placeholder="Ingrese un número para cuenta atrás"
                    aria-describedby="button-addon2"
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={props.onStartCountdown}
                >
                    Iniciar
                </button>
            </div>
            <div className="d-flex justify-content-end">
                <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={stopCounter}
                >
                    Parar
                </button>
            </div>
        </div>
    );
};

Home.prototypes = {
    fourthDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    firstDigit: PropTypes.number,
    onStartCountdown: PropTypes.func,
    intervalId: PropTypes.number,
};

export default Home;
