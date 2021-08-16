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
    const {
        decrement,
        increment,
        increaseOnMouseDown,
        decreaseOnMouseDown,
        clearOnMouseDown,
    } = useGlobalContext();
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
                    onMouseDown={(e) => {
                        if (e.button === 0) {
                            decreaseOnMouseDown(decId);
                        }
                    }}
                    onMouseUp={clearOnMouseDown}
                    onMouseLeave={clearOnMouseDown}
                    onTouchStart={(e) => decreaseOnMouseDown(decId)}
                    onTouchEnd={clearOnMouseDown}
                >
                    <span className="label-hidden">Decrement Length</span>
                    <FaArrowCircleDown aria-hidden={true} focusable={false} />
                </button>
                <p className="length-id" id={lengthId}>
                    {length}
                </p>
                <button
                    className="decinc-btn-child"
                    id={incId}
                    onClick={() => increment(incId)}
                    onMouseDown={(e) => {
                        if (e.button === 0) {
                            increaseOnMouseDown(incId);
                        }
                    }}
                    onMouseUp={clearOnMouseDown}
                    onMouseLeave={clearOnMouseDown}
                    onTouchStart={(e) => increaseOnMouseDown(incId)}
                    onTouchEnd={clearOnMouseDown}
                >
                    <span className="label-hidden">Increment Length</span>
                    <FaArrowCircleUp aria-hidden={true} focusable={false} />
                </button>
            </div>
        </div>
    );
};

export default TimerLengthControl;
