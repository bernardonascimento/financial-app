import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>E-Mail</Text>
        <View style={styles.action}>

        </View>
      </View>
    </View>
  )
};

var styles = StyleSheet.create({
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