import { createContext, useState, useContext } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");

    return (
        <>
            <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn, name, setname, email, setemail}}>
                {children}
            </LoginContext.Provider>
        </>
    )
};

const useLoginContext = () => {
    return useContext(LoginContext);
}

export { LoginProvider, useLoginContext };