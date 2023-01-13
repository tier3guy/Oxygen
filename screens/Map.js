import { View, StyleSheet, StatusBar, Text } from "react-native";
import Colors from "../assets/Themes/colors";
import { useContext } from "react";

import { Locator } from "../components";

import MapView from "react-native-maps";
import SwipeUpDown from 'react-native-swipe-up-down';

const Map = ({location, address}) => {

    const BORDER_RADIUS = 25;    
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
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0015,
                        longitudeDelta: 0.0015,
                    }}
                />
                <SwipeUpDown 
                    itemMini={(show) => <Locator isFull={false} address={address}/>}
                    itemFull={(hide) => <Locator isFull={true} address={address}/>}
                    // onShowMini={() => console.log('mini')}
                    // onShowFull={() => console.log('full')}
                    animation="easeInEaseOut"
                    disableSwipeIcon
                    extraMarginTop={100}
                    iconColor='yellow'
                    iconSize={30}
                    style={{ 
                        borderTopLeftRadius: BORDER_RADIUS,
                        borderTopRightRadius: BORDER_RADIUS,
                        backgroundColor: Colors.light,
                        elevation: 5,
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
});

export default Map;