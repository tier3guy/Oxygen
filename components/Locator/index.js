import { View, Text, Image, TouchableOpacity } from "react-native";
import colors from "../../assets/Themes/colors";
import data from "../../assets/SampleData/MOCK_DATA";

import Ionicons from "react-native-vector-icons/Ionicons";

const Card = ({ item }) => {

    const url = "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";

    return (
        <View
            style={{
                padding: 5,
                backgroundColor: "white",
                borderRadius: 3,
                elevation: 2,
                height: 300,
                flexDirection: "column",
            }}
        >
            <View style={{
                flex: 1,
            }}>
                <Image style={{height: 100, borderRadius: 3,}} source={{
                    uri: url
                }}/>
            </View>
            
            <View style={{ padding: 10 }} >
                <Text style={{
                    fontFamily: "SemiBold",
                    fontSize: 22,
                    marginBottom: 5,
                    color: colors.black
                }} >{item.store_name}</Text>
                <Text style={{
                    fontFamily: "Medium",
                    fontSize: 14,
                    marginBottom: 5,
                    color: colors.black
                }} >Owned by : {item.owner}</Text>
                <Text style={{
                    fontFamily: "Medium",
                    fontSize: 14,
                    marginBottom: 5,
                    color: colors.black
                }} >{item.email}</Text>

                <View style={{flexDirection: "row", alignItems: "center", marginTop: 15}}>
                    <Ionicons size={20} color={colors.black} name="location-sharp" />
                    <Text style={{
                        color: colors.black,
                        fontFamily: "Medium",
                        fontSize: 14,
                        marginLeft: 5,
                    }}>{item.address}</Text>
                </View>

                <TouchableOpacity style={{
                    backgroundColor: colors.black,
                    marginTop: 15,
                    padding: 15,
                    borderRadius: 3,
                    elevation: 2,
                }}>
                    <Text style={{fontFamily: "Medium", color: "white", alignSelf: "center"}}>Call @{item.phone}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Locator = ({isFull, address}) => {

    if(!address) return <></>;
    
    if(isFull){
        return (
            <View style={{paddingHorizontal: 25}}>

                <View
                    style={{
                        marginVertical: 20,
                        alignSelf: "center",
                        borderRadius: 10,
                        width: 100,
                        height: 7,
                        backgroundColor: colors.black,
                    }}
                />
                <View>
                    <Text 
                        style={{
                            fontFamily: "SemiBold",
                            fontSize: 24,
                            color: colors.black,
                            marginVertical: 10
                        }}
                    >
                        You are at
                    </Text>
                    <Text 
                        style={{
                            fontFamily: "Medium",
                            fontSize: 14,
                            color: colors.black
                        }}
                    >
                        12, Brojo Dulal Street, Kolkata - 700006
                    </Text>
                    <Text 
                        style={{
                            fontFamily: "Medium",
                            fontSize: 14,
                            color: colors.black
                        }}
                    >
                        West Bengal, India
                    </Text>
                </View>
                
                <View
                    style={{
                        marginVertical: 20,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Medium",
                            fontSize: 18,
                        }}
                    >
                        Nearest Oxygen Provider
                    </Text>

                    <View
                        style={{
                            marginTop: 15,
                        }}
                    >
                        <Card item={data[0]}/>
                    </View>

                    <View
                        style={{
                            alignSelf: "center",
                            marginTop: 15
                        }}
                    >
                        <View
                            style={{
                                marginVertical: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: colors.black,
                                alignSelf: "flex-start",
                            }}
                        >
                            <Text 
                                style={{
                                    textAlign: "center",
                                    fontFamily: "Medium",
                                    fontSize: 14,
                                    color: colors.black,
                                }}
                            >
                                See all nearby providers
                            </Text>
                        </View>
                    </View>

                </View>

            </View>
        );
    }

    return (
        <View
            style={{
                marginVertical: 15,
                alignSelf: "center",
                borderRadius: 10,
                width: 100,
                height: 5,
                backgroundColor: colors.black,
            }}
        />
    );
}

export default Locator;