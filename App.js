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
      <AccountTab.Screen name="ListNotes" component={ListNoteScreen} />   
      <AccountTab.Screen name="CreateNotes" component={CreateNoteScreen} />
      <AccountTab.Screen name="MyAccount" component={AccountScreen} />
  </AccountTab.Navigator>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////   Bottom Tab Navigator for Logged In User  /////////////////////////////////////

// const Tab = createMaterialBottomTabNavigator();

// function AccountTabNavigator() {
//   return (
//     <Tab.Navigator 
//          screenOptions={({ route }) => ({
//          tabBarIcon: ({ focused, color, size }) => {  
//          let iconName;
//          if (route.name === 'Admin Login') {
//             iconName = focused ? 'ios-person' : 'ios-person-outline';
//          } else if (route.name === 'User Login') {
//             iconName = focused ? 'ios-people' : 'ios-people-outline';
//          }  else if (route.name === 'Notes') {
//           iconName = focused ? 'ios-book' : 'ios-book-outline';
//        }
        
//          return <Ionicons name={iconName} size={22} color={color}   />;
//         },
//         })}
//         tabBarOptions={{
//         activeTintColor: 'red',
//         inactiveTintColor: 'gray',
//         }} >
//       <Tab.Screen name="ListNotes" component={ListNoteScreen} />   
//       <Tab.Screen name="CreateNotes" component={CreateNoteScreen} />
//       <Tab.Screen name="MyAccount" component={AccountScreen} />
//   </Tab.Navigator>
//   );
// }

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
      <AllScreenStack.Screen options={{ headerShown: false }} name="AdminLogin" component={AdminLoginScreen} />
      <AllScreenStack.Screen name="My Account" component={AccountTabNavigator} />
      {/* <AllScreenStack.Screen name="Account" component={AccountScreen} />
      <AllScreenStack.Screen name="CreateNotes" component={CreateNoteScreen} />  */}
      <AllScreenStack.Screen name="NotesDetail" component={NotesDetailScreen} />
    </AllScreenStack.Navigator>
  );
}

export default App = () => {
  return (
    <AuthProvider>
       <NavigationContainer ref={navigationRef} >   
         <AllScreensStack />
       </NavigationContainer>
    </AuthProvider>
  );
}


