import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timer, setTimer] = useState();
    const [startStop, setStartStop] = useState(false);

    const increment = (id) => {
        if (id === "break-increment") {
            if (breakLength <= 60) {
                setBreakLength((prev) => prev + 1);
            }
        } else if (id === "session-increment") {
            if (sessionLength < 60) {
                setSessionLength((prev) => prev + 1);
            }
        }
    };
    const decrement = (id) => {
        if (id === "break-decrement") {
            if (breakLength > 0) {
                setBreakLength((prev) => prev - 1);
            }
        } else if (id === "session-decrement") {
            if (sessionLength > 0) {
                setSessionLength((prev) => prev - 1);
            }
        }
    };

    const handleStartStop = () => {
        setStartStop(!startStop);
    };

    const clockify = () => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer - minutes * 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return minutes + ":" + seconds;
    };

    useEffect(() => {
        if (startStop) {
            const time =
                timer > 0 &&
                setInterval(() => {
                    setTimer((timer) => timer - 1);
                }, 1000);
            return () => {
                clearInterval(time);
            };
        }
    }, [handleStartStop]);

    useEffect(() => {
        setTimer(sessionLength * 60);
    }, [breakLength, sessionLength]);

    return (
        <AppContext.Provider
            value={{
                breakLength,
                sessionLength,
                timer,
                setBreakLength,
                setSessionLength,
                increment,
                decrement,
                clockify,
                handleStartStop,
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
