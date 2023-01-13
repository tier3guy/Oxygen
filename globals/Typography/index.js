import { Text } from  "react-native";
import colors from "../../assets/Themes/colors";

const TextFormat = ({ text, styles, type }) => {
    return (
        <Text
            style={{
                fontFamily: type ? type : "Medium",
                fontSize: 24,
                color: colors.black,
                ...styles
            }}
        >
            { text }
        </Text>
    );
}

export default TextFormat;