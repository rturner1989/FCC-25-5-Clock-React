import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const TimerLengthControl = ({
    titleId,
    title,
    incId,
    decId,
    lengthId,
    length,
}) => {
    const { decrement, increment } = useGlobalContext();
    return (
        <div className="length-controller">
            <h3 className="length-title" id={titleId}>
                {title}
            </h3>
            <div className="decinc-btn-container">
                <button
                    className="decinc-btn-child"
                    id={decId}
                    onClick={() => decrement(decId)}
                >
                    <FaArrowDown />
                </button>
                <p className="decinc-btn-child" id={lengthId}>
                    {length}
                </p>
                <button
                    className="decinc-btn-child"
                    id={incId}
                    onClick={() => increment(incId)}
                >
                    <FaArrowUp />
                </button>
            </div>
        </div>
    );
};

export default TimerLengthControl;
