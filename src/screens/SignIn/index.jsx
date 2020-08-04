import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styleSignIn from './style'

export default () => {
  return (
    <View style={styleSignIn.container}>
      <View style={styleSignIn.header}>
        <Text style={styleSignIn.text_header}>Bem-vindo!</Text>
      </View>
      <View style={styleSignIn.footer}>
        <Text style={styleSignIn.text_footer}>E-Mail</Text>
        <View style={styleSignIn.action}>

        </View>
      </View>
    </View>
  )
};

