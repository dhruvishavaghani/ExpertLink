import { createContext, useState, useContext } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

    return (
        <>
            <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn, name, setName, email, setEmail, id, setId}}>
                {children}
            </LoginContext.Provider>
        </>
    )
};

const useLoginContext = () => {
    return useContext(LoginContext);
}

export { LoginProvider, useLoginContext };