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
    const { decrement, increment, decreaseOnMouseDown, clearOnMouseDown } =
        useGlobalContext();
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
                    onMouseDown={decreaseOnMouseDown}
                    onMouseUp={clearOnMouseDown}
                >
                    <span className="label-hidden">Decrement Length</span>
                    <FaArrowDown aria-hidden={true} focusable={false} />
                </button>
                <p className="length-id" id={lengthId}>
                    {length}
                </p>
                <button
                    className="decinc-btn-child"
                    id={incId}
                    onClick={() => increment(incId)}
                >
                    <span className="label-hidden">Increment Length</span>
                    <FaArrowUp aria-hidden={true} focusable={false} />
                </button>
            </div>
        </div>
    );
};

export default TimerLengthControl;
