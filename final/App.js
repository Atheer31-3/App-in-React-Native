import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, Image, RefreshControl, StyleSheet } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeTwo from './homeTwo';

/// varable
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const SettingsStack = createNativeStackNavigator();
// fun
//fun  work rout and param and 
function DetailsScreen({ route, navigation }) {
  const { param1, param2 } = route.params ?? {};
  const [text, setText] = useState('');

  return (
    <View style={styles.view}>
      <Text>Details!</Text>
      <Text>Param1: {param1}</Text>
      <Text>Param2: {param2}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text..."
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button
        title="Go to Details2"
        onPress={() => navigation.navigate('DetailsScreen2', { param1: 'Value3', param2: 'Value4' })}
      />
    </View>
  );
}

function DetailsScreen2({ route, navigation }) {
  const { param1, param2 } = route.params ?? {};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details2!</Text>
      <Text>Param1: {param1}</Text>
      <Text>Param2: {param2}</Text>
      <Button
        title="Go to Details1"
        onPress={() => navigation.navigate('DetailsScreen', { param1: 'Value1', param2: 'Value2' })}
      />
    </View>
  );
}

// nav to DetailsScreen 
function SettingsScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Text>Settings</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('DetailsScreen')} />
    </View>
  );
}
// stack nav (DetailsScreen,DetailsScreen2,SettingsScreen)
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' component={SettingsScreen} />
      <SettingsStack.Screen name='DetailsScreen' component={DetailsScreen} />
      <SettingsStack.Screen name='DetailsScreen2' component={DetailsScreen2} />
    </SettingsStack.Navigator>
  );
}
// imprtant fun // API fetch
function Dashboard() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };
// her is begning fetch

  const fetchData = async () => {
    setLoading(true);
    try {
      // her change api
      const response = await fetch('https://restcountries.com/v3/all');
      const countries = await response.json();
      setData(countries);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
   // ??
  const logCountries = async () => {
    const response = await fetch('https://restcountries.com/v3/all');
    const countries = await response.json();
    console.log(countries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.vertically}>
      <Text style={styles.item}>Here is the text</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textStyle}>{item.name.common}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
      />
         
      <Button title="Fetch Data" onPress={fetchData} disabled={isLoading} />
      <Button title="Log Countries" onPress={logCountries} />
    </View>
  );
}

function Drawers() {
  return (
    <Drawer.Navigator screenOptions={{ drawerStyle: { backgroundColor: 'lightblue', width: 250 } }} initialRouteName='Dashboard'>
      <Drawer.Screen name='Dashboard' component={Dashboard} options={{ drawerLabel: 'Dashboard' }} />
      <Drawer.Screen name='Profile' component={Profile} options={{ drawerLabel: 'Profile' }} />
      <Drawer.Screen name='Myfirebase' component={Myfirebase} options={{ drawerLabel: 'Myfirebase' }} />
    </Drawer.Navigator>
  );
}

function Myfirebase() {
  return(
  <View style={styles.vertically}>
  <HomeTwo />
  </View>
  );
}

function Profile() {
  const [text, setText] = useState('');

  return (
    <View style={styles.vertically}>
      <Text>Profile!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text..."
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Text style={styles.textStyle}>Input Text: {text}</Text>
      <Image source={require('./assets/favicon.png')} style={styles.ImgStyle} />
      <Button title="Hello text" onPress={() => alert('Button clicked!')} />
      <View>
      <HomeTwo />
    </View>
    </View>
    
  );
}

function Tab() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        initialRouteName: 'dashboard',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'dashboard') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <BottomTab.Screen name='dashboard' component={Drawers} options={{ tabBarBadge: 3 }} />
      <BottomTab.Screen name='settings' component={SettingsStackScreen} />
    </BottomTab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Tab' component={Tab} />
        <Stack.Screen name='HomeTwo' component={HomeTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  view:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center' 
  },
  vertically: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  ImgStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 10,
  },
  textStyle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 2,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },

});
