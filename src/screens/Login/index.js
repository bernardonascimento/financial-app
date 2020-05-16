import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={2000}
          source={require("../../../assets/logo.png")}
          style={styles.logo}
          resizeMode={"stretch"}
        />
      </View>
      <Animatable.View 
        style={styles.footer}
        animation="fadeInUpBig"
        duration={2000}>
        <Text style={styles.title}>Stay connect with everyone!</Text>
        <Text style={styles.text}>Sign in with account</Text>

        <View style={styles.button}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("SignIn")}>          
            <LinearGradient 
              colors={["#5db8fe", "#39cff2"]}
              style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                  Sign in with E-mail
                </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const {height} = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

var styles = StyleSheet.create({
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
    flex: 1.5,
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
    fontSize: 30,
  },
  text: {
    color: "gray",
    marginTop: 5,
  },
  button: {
    marginTop: 30,
    height: 50,
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 25,    
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#ffffff',
  },
})
