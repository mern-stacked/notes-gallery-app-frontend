import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import AccountScreen from "./src/screens/AccountScreen";
import CreateNoteScreen from "./src/screens/CreateNoteScreen";
import ListNoteScreen from "./src/screens/ListNotesScreen";
import NotesDetailScreen from "./src/screens/NotesDetailScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AdminLoginScreen from "./src/screens/AdminLoginScreen";

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from "./src/navigationRef";

// Home Screens
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

// Notes List and Detail Screens
const NotesListStack = createNativeStackNavigator();

function NotesListStackScreen() {
  return (
    <NotesListStack.Navigator>
      <NotesListStack.Screen name="List Notes" component={ListNoteScreen} />
      <NotesListStack.Screen name="Notes Detail" component={NotesDetailScreen} />
    </NotesListStack.Navigator>
  );
}

// Authentication Screens
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

// Bottom Tab Navigator for Auhentication
const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator 
         screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {  
         let iconName;
         if (route.name === 'Admin Login') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
         } else if (route.name === 'User Login') {
            iconName = focused ? 'ios-people' : 'ios-people-outline';
         }
        
         return <Ionicons name={iconName} size={22} color={color}     />;
        },
        })}
        tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        }} >
      <Tab.Screen name="Admin Login" component={AdminLoginScreen} />
      <Tab.Screen name="User Login" component={AuthStackScreen} />
  </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer >  
      <HomeStackScreen />
    </NavigationContainer>
  );
}

const Navigation1 = () => {
  return (
    <NavigationContainer >  
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App = () => {
  return (
    <AuthProvider>
      <Navigation1 />
    </AuthProvider>
  );
}


