import React from "react";
import { StyleSheet , Text , View } from "react-native";

const Header = () => {
    return (
        <View>
        <View style={styles.headerStyle}>
          <Text style={styles.textStyle}>Albums</Text>
        </View>
        </View>
  );
};

const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: "#81C3D7",
      justifyContent: "center",
      alignItems: "center",
      height: 90,
      paddingTop: 30,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      // Android Only
      elevation: 2
    },
    textStyle: {
      fontSize: 20,
      color:"#16425B",
      fontWeight: "bold"
    },
});

export default Header;