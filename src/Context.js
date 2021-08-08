import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);

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

    return (
        <AppContext.Provider
            value={{
                breakLength,
                sessionLength,
                setBreakLength,
                setSessionLength,
                increment,
                decrement,
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
