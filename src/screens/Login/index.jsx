import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styleLogin from './style'

export default ({ navigation }) => {
  return (
    <View style={styleLogin.container}>
      <StatusBar barStyle="light-content" />      
      <View style={styleLogin.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={2000}
          source={require("../../../assets/logo.png")}
          style={styleLogin.logo}
          resizeMode={"stretch"}
        />
      </View>
      <Animatable.View 
        style={styleLogin.footer}
        animation="fadeInUpBig"
        duration={1500}>
        <Text style={styleLogin.title}>Crie sua conta</Text>
        <Text style={styleLogin.text}>Crie sua conta para iniciar o seu controle financeiro!</Text>
        <Text style={styleLogin.text}>O financial app te ajudara a ter o controle total sobre suas financas</Text>

        <View style={styleLogin.button}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("SignIn")}>          
            <LinearGradient 
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={styleLogin.linearGradient}>
                <FontAwesome name="facebook" size={24} color="#fff" />
                <Text style={styleLogin.buttonText}>
                  Cadastrar com Facebook
                </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styleLogin.button}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("SignIn")}>          
            <LinearGradient 
              colors={["#c0c0c0", "#dcdcdc"]}
              style={styleLogin.linearGradient}>
                <Image
                  source={require('../../../assets/google.png')}
                  fadeDuration={0}
                  style={{width: 24, height: 24}}
                />
                <Text style={styleLogin.buttonText}>
                  Cadastrar com Google
                </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styleLogin.button}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("ChatBot")}>          
            <LinearGradient 
              // colors={["#5db8fe", "#39cff2"]}
              colors={["#0086FF", "#5db8fe"]}
              style={styleLogin.linearGradient}>
                <MaterialCommunityIcons name="email-outline" size={24} color="#fff" />
                <Text style={styleLogin.buttonText}>
                  Cadastrar com E-mail
                </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};


