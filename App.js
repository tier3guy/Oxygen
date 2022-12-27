import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useEffect, useState } from "react";

import * as Location from "expo-location";
import MapView from "react-native-maps";
import { useFonts } from "expo-font";

import Colors from "./assets/Themes/colors";
import LocationSVG from "./assets/SVGs/location";

const App = () => {

  const [ location, setLocation ] = useState(null);

  const _getLocation = async () => {
    try{
      const permission = await Location.requestForegroundPermissionsAsync();
      if(permission.status !== "granted"){
        console.log(">> LOCATION permission is not granted");
        return;
      }

      const _location = await Location.getCurrentPositionAsync({});
      setLocation(_location);
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

  if(!location) return (
    <>
      <StatusBar 
        backgroundColor={Colors.black} 
        barStyle={"light-content"}
        animated={true}
      />
      <View style={[styles.app, styles.center]}>
        <LocationSVG width={"300px"}/>
        <View style={{width: "80%"}}>
          <Text style={{fontFamily: "SemiBold", fontSize: 20, marginTop: "-20%"}}>Turn on your location & allow us to use your location inorder to keep this app functional</Text>
          <Text style={{fontFamily: "Medium", fontSize: 14, marginTop: 15, width: "90%"}} >
            We use your location inorder to search nearby Oxygen Supply Center and serve you the better result. We are not stealing and selling your location data to anyone outside. 
          </Text>
        </View>
      </View>
    </>
  );

  return (
    <>
      <StatusBar 
        backgroundColor={Colors.black} 
        barStyle={"light-content"}
        animated={true}
      />
      <View style={styles.app}>
        <MapView 
          style={styles.map}
          userInterfaceStyle={'dark'}
          showsUserLocation
          //showsMyLocationButton
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0015,
            longitudeDelta: 0.0015,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%"
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  }
});

export default App;