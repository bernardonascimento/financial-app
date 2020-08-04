import { StyleSheet, Dimensions } from "react-native"

const {height} = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

var styleLogin = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0086FF"
    },
    header: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    footer: {
      flex: 2,
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 20,
    },
    logo: {
      height: height_logo,
      width: height_logo,
    },
    title: {
      color: "#0086FF",
      fontWeight: "bold",
      fontSize: 25,
    },
    text: {
      color: "gray",
      marginTop: 5,
    },
    button: {
      marginTop: 25,
      height: 50,
    },
    linearGradient: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
      borderRadius: 25,
      paddingLeft: 40,
      paddingRight: 40,    
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: '#ffffff',
      paddingLeft: 10,
    },
  })

export default styleLogin;