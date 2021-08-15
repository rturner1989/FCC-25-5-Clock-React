import React from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
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
                <div className={decId}>
                    <button
                        className="decinc-btn-child"
                        id={decId}
                        onClick={() => decrement(decId)}
                        onMouseDown={decreaseOnMouseDown}
                        onMouseUp={clearOnMouseDown}
                    >
                        <span className="label-hidden">Decrement Length</span>
                        <FaArrowCircleDown
                            aria-hidden={true}
                            focusable={false}
                        />
                    </button>
                </div>
                <p className="length-id" id={lengthId}>
                    {length}
                </p>
                <div className={incId}>
                    <button
                        className="decinc-btn-child"
                        id={incId}
                        onClick={() => increment(incId)}
                    >
                        <span className="label-hidden">Increment Length</span>
                        <FaArrowCircleUp aria-hidden={true} focusable={false} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimerLengthControl;
