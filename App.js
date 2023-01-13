import { useEffect, useState, createContext } from "react";

import GrantLocationScreen from "./screens/GrantLocationScreen";
import Map from "./screens/Map";

import * as Location from "expo-location";
import { useFonts } from "expo-font";

export const locationContext = createContext();
const App = () => {

  const [ location, setLocation ] = useState(null);
  const [ address, setAddress ] = useState(null);

  const _getLocation = async () => {
    try{
      const permission = await Location.requestForegroundPermissionsAsync();
      if(permission.status !== "granted"){
        console.log(">> LOCATION permission is not granted");
        return;
      }

      const _location = await Location.getCurrentPositionAsync({});
      setLocation(_location);
      const _address = await Location.reverseGeocodeAsync({ 
        latitude: _location.coords.latitude,
        longitude: _location.coords.longitude
      });
      setAddress(_address);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => { _getLocation() }, []);

  const [ fontsLoaded ] = useFonts({
    "SemiBold" : require("./assets/Fonts/Monts/Montserrat-SemiBold.ttf"),
    "Medium" : require("./assets/Fonts/Monts/Montserrat-Medium.ttf"),
    "Light" : require("./assets/Fonts/Monts/Montserrat-Light.ttf"),
  });
  if(!fontsLoaded) return <></>

  return (
    <locationContext.Provider 
      value={{
        location,
        setLocation, 
        address,
        setAddress
      }}
    >
      {
        (location) ? 
        <Map location={location} address={address}/> : 
        <GrantLocationScreen location={location} address={address}/>
      }
    </locationContext.Provider>
  );
}

export default App;