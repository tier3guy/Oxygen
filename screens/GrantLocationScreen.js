import React from "react";
import { StatusBar, View, Text, TouchableOpacity, StyleSheet, Platform, Linking} from "react-native";

import LocationSVG from "../assets/SVGs/location";
import Colors from "../assets/Themes/colors";

import Icon from  "react-native-vector-icons/AntDesign";

const GrantLocationScreen = () => {

    const handleOpenSettings = () => {
        if (Platform.OS === 'ios') {
            Linking.openURL('app-settings:');
        } else {
            Linking.openSettings();
        }
    };

    return (
        <>
        <StatusBar
            backgroundColor={Colors.black}
            barStyle={"light-content"}
            animated={true}
        />
        <View style={[styles.app, styles.center]}>
            <LocationSVG width={"300px"} />
            <View style={{ width: "80%" }}>
            <Text
                style={{ fontFamily: "SemiBold", fontSize: 20, marginTop: "-20%" }}
            >
                Turn on your location & allow us to use your location inorder to
                keep this app functional
            </Text>
            <Text
                style={{
                    fontFamily: "Medium",
                    fontSize: 14,
                    marginTop: 15,
                    width: "90%",
                }}
            >
                We use your location inorder to search nearby Oxygen Supply Center
                and serve you the better result. We are not stealing and selling
                your location data to anyone outside.
            </Text>

            <TouchableOpacity style={styles.buttonMain} onPress={handleOpenSettings}>
                <Text style={{fontFamily: "Medium", color: "white", fontSize: 16, marginHorizontal: 10}}>Allow Location</Text>
                <Icon name="arrowright" color={"white"} size={16}/>
            </TouchableOpacity>
            </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonMain: {
        backgroundColor: Colors.black,
        padding: 15,
        alignItems: "center",
        marginTop: 20,
        elevation: 4,
        flexDirection: "row",
        justifyContent: "center",
    }
});

export default GrantLocationScreen;
