import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homepage';
import ProfilePage from './screens/ProfilePage';
import MyEventPage from './screens/myeventpage';
import TemplatePage from './screens/templatepage';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import EventDescription from './screens/EventDescription';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = 'user';

          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'My Events') {
            iconName = 'calendar'; // Use the 'calendar' icon for My Events tab
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: true
      })}
    >
      <Tab.Screen name="Profile" component={ProfilePage} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Events" component={MyEventPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={MyTabs} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="My Events" component={MyEventPage} />
        <Stack.Screen name="Template" component={TemplatePage} />

        <Stack.Screen name="EventDescription" component={EventDescription}
          options={{ headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
