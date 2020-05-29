import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
        duration={1500}>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.text}>Crie sua conta para iniciar o seu controle financeiro!</Text>
        <Text style={styles.text}>O financial app te ajudara a ter o controle total sobre suas financas</Text>

        <View style={styles.button}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("SignIn")}>          
            <LinearGradient 
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={styles.linearGradient}>
                <FontAwesome name="facebook" size={24} color="#fff" />
                <Text style={styles.buttonText}>
                  Cadastrar com Facebook
                </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("SignIn")}>          
            <LinearGradient 
              colors={["#c0c0c0", "#dcdcdc"]}
              style={styles.linearGradient}>
                <Image
                  source={require('../../../assets/google.png')}
                  fadeDuration={0}
                  style={{width: 24, height: 24}}
                />
                <Text style={styles.buttonText}>
                  Cadastrar com Google
                </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("ChatBot")}>          
            <LinearGradient 
              // colors={["#5db8fe", "#39cff2"]}
              colors={["#0086FF", "#5db8fe"]}
              style={styles.linearGradient}>
                <MaterialCommunityIcons name="email-outline" size={24} color="#fff" />
                <Text style={styles.buttonText}>
                  Cadastrar com E-mail
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
