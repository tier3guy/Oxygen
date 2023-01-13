import { View } from "react-native"
import colors from "../../assets/Themes/colors";

const Bar = ({styles}) => {
    return (
        <View 
            style={{
                width: 70,
                height: 5,
                borderRadius: 5,
                backgroundColor: colors.dark,
                alignSelf: "center",
                ...styles,
            }}
        />
    );
}

export default Bar;