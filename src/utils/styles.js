import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  widthFull: {
    width: width,
  },
  container: {
    flex: 1,
    backgroundColor: "#979dac",
    alignItems: "center",
    justifyContent: "center",
  },
  containerFullWidth: {
    flex: 1,
    width: width,
  },
});
