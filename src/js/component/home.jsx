import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = (props) => {
    return (
        <div className="bigClock d-flex justify-content-center">
            <div className="image">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="fourthDigit">{props.fourthDigit % 10}</div>
            <div className="thirdDigit">{props.thirdDigit % 10}</div>
            <div className="secondDigit">{props.secondDigit % 10}</div>
            <div className="firstDigit">{props.firstDigit % 10}</div>
        </div>
    );
};

Home.prototypes = {
    fourthDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    firstDigit: PropTypes.number,
};

export default Home;
