import React, { useContext, useState, useEffect } from "react";
import { CgPlayButtonR, CgPlayPauseR } from "react-icons/cg";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [breakTimer, setBreakTimer] = useState();
    const [sessionTimer, setSessionTimer] = useState();
    const [startStop, setStartStop] = useState(false);

    const increment = (id) => {
        if (!startStop) {
            if (id === "break-increment") {
                if (breakLength < 60) {
                    setBreakLength((prev) => prev + 1);
                }
            } else if (id === "session-increment") {
                if (sessionLength < 60) {
                    setSessionLength((prev) => prev + 1);
                }
            }
        }
    };
    const decrement = (id) => {
        if (!startStop) {
            if (id === "break-decrement") {
                if (breakLength > 1) {
                    setBreakLength((prev) => prev - 1);
                }
            } else if (id === "session-decrement") {
                if (sessionLength > 1) {
                    setSessionLength((prev) => prev - 1);
                }
            }
        }
    };

    const toggle = () => {
        if (startStop) {
            return <CgPlayPauseR aria-hidden={true} focusable={false} />;
        } else {
            return <CgPlayButtonR aria-hidden={true} focusable={false} />;
        }
    };

    const handleStartStop = () => {
        setStartStop(!startStop);
    };

    const reset = () => {
        setStartStop(false);
        setBreakLength(5);
        setSessionLength(25);
        setSessionTimer(sessionLength * 600);
    };

    useEffect(() => {
        if (startStop) {
            let time = null;
            if (sessionTimer > 0) {
                time = setInterval(() => {
                    setSessionTimer((timer) => timer - 1);
                }, 100);
            } else if (breakTimer === 0) {
                setSessionTimer(sessionLength * 600);
                setBreakTimer(breakLength * 600);
            } else if (sessionTimer === 0) {
                time = setInterval(() => {
                    setBreakTimer((timer) => timer - 1);
                }, 100);
            }
            return () => {
                clearInterval(time);
            };
        }
    }, [breakTimer, sessionTimer, startStop]);

    useEffect(() => {
        setSessionTimer(sessionLength * 600);
        setBreakTimer(breakLength * 600);
    }, [breakLength, sessionLength]);

    return (
        <AppContext.Provider
            value={{
                breakLength,
                sessionLength,
                sessionTimer,
                breakTimer,
                setBreakLength,
                setSessionLength,
                increment,
                decrement,
                handleStartStop,
                reset,
                toggle,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
    return useContext(AppContext);
};
