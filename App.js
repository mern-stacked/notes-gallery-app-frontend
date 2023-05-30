import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import AccountScreen from "./src/screens/AccountScreen";
import CreateNoteScreen from "./src/screens/CreateNoteScreen";
import ListNoteScreen from "./src/screens/ListNotesScreen";
import NotesDetailScreen from "./src/screens/NotesDetailScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

import { Provider as AuthProvider } from './src/context/AuthContext';

//
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Account" component={AccountScreen} />
      {/* <HomeStack.Screen name="List Notes" component={ListNoteScreen} /> */}
      <HomeStack.Screen name="Create Notes" component={CreateNoteScreen} /> 
      {/* <HomeStack.Screen name="Notes Detail" component={NotesDetailScreen} /> */}
    </HomeStack.Navigator>
  );
}


const NotesListStack = createNativeStackNavigator();

function NotesListStackScreen() {
  return (
    <NotesListStack.Navigator>
      <NotesListStack.Screen name="List Notes" component={ListNoteScreen} />
      <NotesListStack.Screen name="Notes Detail" component={NotesDetailScreen} />
    </NotesListStack.Navigator>
  );
}

const AuthStack = createNativeStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
       <AuthStack.Screen name="Register" component={SignupScreen} options={{ title: 'My home' }} />
       <AuthStack.Screen name="Login" component={SigninScreen} />
    </AuthStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="All Notes" component={NotesListStackScreen} />
        <Tab.Screen name="Authenticate" component={AuthStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}


