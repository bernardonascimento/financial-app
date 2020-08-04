import { StyleSheet } from 'react-native'
var styleSignIn = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0086FF"
    },
    header: {
      flex: 1,
      justifyContent: "flex-end",
      paddingHorizontal: 20,
      paddingBottom: 50,
    },
    footer: {
      flex: 3,
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 30,
      paddingHorizontal: 20,
    },
    text_header: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 30,
    },
    text_footer: {
      color: "#0086FF",
      fontSize: 18,
    },
    action: {
      flexDirection: "row",
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#f2f2f2",
      paddingBottom: 5,
    }
  });

export default styleSignIn;