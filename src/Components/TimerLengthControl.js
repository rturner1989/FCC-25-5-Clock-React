import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const TimerLengthControl = ({
    titleId,
    title,
    incId,
    decId,
    lengthId,
    length,
    onClick,
}) => {
    return (
        <div className="length-controller">
            <div className="length-title" id={titleId}>
                {title}
            </div>
            <div className="btn-container">
                <button className="btn-child" id={decId} value="-">
                    <FaArrowDown />
                </button>
                <p className="btn-child" id={lengthId}>
                    {length}
                </p>
                <button className="btn-child" id={incId}>
                    <FaArrowUp />
                </button>
            </div>
        </div>
    );
};

export default TimerLengthControl;
