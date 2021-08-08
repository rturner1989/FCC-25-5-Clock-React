import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);

    const increment = (id) => {
        if (id === "break-increment") {
            setBreakLength((prev) => prev + 1);
        }
        if (id === "session-increment") {
            setSessionLength((prev) => prev + 1);
        }
    };
    const decrement = (id) => {
        if (id === "break-decrement") {
            setBreakLength((prev) => prev - 1);
        }
        if (id === "session-decrement") {
            setSessionLength((prev) => prev - 1);
        }
    };

    // const handleBreakLengthChange = (e) => {
    //     if (e.currentTarget.value === "+") {
    //         setBreakLength((prev) => prev + 1);
    //     } else if (e.currentTarget.value === "-") {
    //         setBreakLength((prev) => prev - 1);
    //     }
    // };
    // const handleSessionLengthChange = (e) => {
    //     if (e.currentTarget.value === "+") {
    //         setSessionLength((prev) => prev + 1);
    //     } else if (e.currentTarget.value === "-") {
    //         setSessionLength((prev) => prev - 1);
    //     }
    // };

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
