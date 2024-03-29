import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from "./src/RootNavigation";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import SplashSceen from "./src/screens/SplashScreen";
import AccountScreen from "./src/screens/AccountScreen";
import CreateNoteScreen from "./src/screens/CreateNoteScreen";
import ListNoteScreen from "./src/screens/ListNotesScreen";
import NotesDetailScreen from "./src/screens/NotesDetailScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AdminLoginScreen from "./src/screens/AdminLoginScreen";

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as NotesProvider } from './src/context/NotesContext';

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
////////////////   Bottom Tab Navigator for Logged In User  /////////////////////////////////////

const AccountTab = createMaterialBottomTabNavigator();

function AccountTabNavigator() {
  return (
    <AccountTab.Navigator 
         screenOptions={({ route }) => ({
         BarIcon: ({ focused, color, size }) => {  
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
      <AccountTab.Screen name="MyAccount" component={AccountScreen} />
      <AccountTab.Screen name="CreateNotes" component={CreateNoteScreen} />
      <AccountTab.Screen name="ListNotes" component={ListNoteScreen} />   
  </AccountTab.Navigator>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////   Bottom Tab Navigator for Logged In User  /////////////////////////////////////

const AuthTab = createMaterialBottomTabNavigator();

function AuthTabNavigator() {
  return (
    <AuthTab.Navigator 
       screenOptions={{
        headerShown: false
      }}
      //    screenOptions={({ route }) => ({
      //    tabBarIcon: ({ focused, color, size }) => {  
      //    let iconName;
      //    if (route.name === 'Admin Login') {
      //       iconName = focused ? 'ios-person' : 'ios-person-outline';
      //    } else if (route.name === 'User Login') {
      //       iconName = focused ? 'ios-people' : 'ios-people-outline';
      //    }  else if (route.name === 'Notes') {
      //     iconName = focused ? 'ios-book' : 'ios-book-outline';
      //  }
        
      //    return <Ionicons name={iconName} size={22} color={color}   />;
      //   },
      //   })}
      //   tabBarOptions={{
      //   activeTintColor: 'red',
      //   inactiveTintColor: 'gray',
      //   }} >
      >
      <AuthTab.Screen options={{ headerShown: false }} name="Register" component={SignupScreen} />   
      <AuthTab.Screen options={{ headerShown: false }} name="UserLogin" component={SigninScreen} />
      <AuthTab.Screen options={{ headerShown: false }} name="AdminLogin" component={AdminLoginScreen} />
  </AuthTab.Navigator>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Stack of Screens
const AllScreenStack = createNativeStackNavigator();

function AllScreensStack() {
  return (
    <AllScreenStack.Navigator>
      <AllScreenStack.Screen options={{ headerShown: false }} name="Splash" component={SplashSceen} />
      <AllScreenStack.Screen options={{ headerShown: false }} name="Register" component={SignupScreen} />
      <AllScreenStack.Screen options={{ headerShown: false }} name="UserLogin" component={SigninScreen} />
      {/* <AllScreenStack.Screen options={{ headerShown: false }} name="AdminLogin" component={AdminLoginScreen} /> */}
      <AllScreenStack.Screen name="Authentication" component={AuthTabNavigator} />
      <AllScreenStack.Screen name="My Account" component={AccountTabNavigator} />

      {/* <AllScreenStack.Screen name="Account" component={AccountScreen} /> */}
      {/* <AllScreenStack.Screen name="Create Notes" component={CreateNoteScreen} />  */}
      <AllScreenStack.Screen name="NotesDetail" component={NotesDetailScreen} />
    </AllScreenStack.Navigator>
  );
}

export default App = () => {
  return (
    <NotesProvider>
      <AuthProvider>
        <NavigationContainer ref={navigationRef} >   
          <AllScreensStack />
        </NavigationContainer>
      </AuthProvider>
    </NotesProvider>
  );
}


