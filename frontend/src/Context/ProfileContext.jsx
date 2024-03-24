//servoceform context
import React, { createContext, useEffect, useState, useReducer } from "react";
import { getProfile } from "../Services/ProfileService";
import reducer from "../Reducer/ProfileReducer";

const ProfileContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    profile: [],
};

const ProfileProvider = ({ children }) => {

    const [profile, dispatch] = useReducer(reducer,initialState);

    const getProfile = async()=>{

        dispatch({ type: "SET_LOADING" });
        try {

            await getProfile().then((response)=>{
                dispatch({ type: "SET_API_DATA", payload: response });
            })
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
            
    }

    useEffect = ()=>{
        getProfile();
    }
    
    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
        {children}
        </ProfileContext.Provider>
    );
}

    const useProfileContext = () => {
        return React.useContext(ProfileContext);
    };

    export { ProfileProvider, useProfileContext };