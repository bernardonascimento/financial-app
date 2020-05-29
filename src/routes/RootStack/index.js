import { createStackNavigator } from 'react-navigation-stack';
import AppIntroTab from '../AppIntro';
import { Login, SignIn, SignUp, Home, ChatBot } from '../../screens';
import { options } from './options';

const RootStack = createStackNavigator(
  { 
    AppIntroTab,
    Login,
    SignIn,
    SignUp,
    Home,
    ChatBot,
  }, 
  { 
    headerMode: 'none' 
  }
);

export default RootStack;