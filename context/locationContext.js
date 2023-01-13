import { createContext, useState } from "react";

export const locationContext = createContext();

const LocationContextProvider = ( { children } ) => {

    const [ location, setLocation ] = useState(null);
    const [ address, setAddress ] = useState(null);

    return (
        <locationContext.Provider
            value={{
                location,
                setLocation, 
                address,
                setAddress
            }}
        >
            { children }
        </locationContext.Provider>
    ); 
}

export default LocationContextProvider;