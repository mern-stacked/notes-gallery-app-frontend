import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from "./src/RootNavigation";

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


// Stack of Screens
const AllScreenStack = createNativeStackNavigator();

function AllScreensStack() {
  return (
    <AllScreenStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <AllScreenStack.Screen name="Register" component={SignupScreen} />
      <AllScreenStack.Screen name="UserLogin" component={SigninScreen} />
      <AllScreenStack.Screen name="ListNotes" component={ListNoteScreen} />
      <AllScreenStack.Screen name="Account" component={AccountScreen} />
      <AllScreenStack.Screen name="CreateNotes" component={CreateNoteScreen} /> 
      <AllScreenStack.Screen name="NotesDetail" component={NotesDetailScreen} />
      <AllScreenStack.Screen name="AdminLogin" component={AdminLoginScreen} />
    </AllScreenStack.Navigator>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////   Authentication Screens /////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////   Bottom Tab Navigator for Auhentication  /////////////////////////////////////

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
         }  else if (route.name === 'Notes') {
          iconName = focused ? 'ios-book' : 'ios-book-outline';
       }
        
         return <Ionicons name={iconName} size={22} color={color}   />;
        },
        })}
        tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        }} >
      <Tab.Screen name="Notes" component={ListNoteScreen} />   
      <Tab.Screen name="AdminLogin" component={AdminLoginScreen} />
      <Tab.Screen name="UserLogin" component={AuthStackScreen} />
  </Tab.Navigator>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default App = () => {
  return (
    <AuthProvider>
       <NavigationContainer ref={navigationRef} >   
         <AllScreensStack />
       </NavigationContainer>
    </AuthProvider>
  );
}


