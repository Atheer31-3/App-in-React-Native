import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, RefreshControl, StyleSheet,Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const eventData = [
  { id: 1, title: 'No Event Added' },
  { id: 2, title: 'No Event Added' },
  { id: 3, title: 'No Event Added' },
  { id: 4, title: 'No Event Added' },
  { id: 5, title: 'No Event Added' },

  // Add more event data as needed
];

function CurrentEventsScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Perform your refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FlatList
        data={eventData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

function PastEventsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Perform your refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >

       <Button
        style={styles.box}
        title="Go to Template"
        onPress={() => navigation.navigate('Template')}
      />
      <FlatList
        data={eventData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
     
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyEventPage() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#DAFFFB',
        inactiveTintColor: '#04364A',
        labelStyle: { fontSize: 16 },
        style: {
          backgroundColor: '#176B87',
          // borderWidth: 2, // Add the desired borderWidth
          // borderRadius: 50, // Add the desired borderRadius
        },
        // indicatorStyle: {
        //   height: 0, // Set the height to 0 to remove the indicator line
        // },        
        indicatorStyle: { backgroundColor: '#64CCC5' },
      }}
    >
      <Tab.Screen name="Current" component={CurrentEventsScreen} />
      <Tab.Screen name="Past" component={PastEventsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  box: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 70,
    marginBottom: 10,
  },
});


export default MyEventPage;
