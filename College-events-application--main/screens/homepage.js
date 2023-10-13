import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { categories, eventData } from '../src/data';
import EventCard from '../src/components/EventCard';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, }}>

      <View

      >
        <FlatList
          horizontal
          data={categories}
          renderItem={
            ({ item }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: 'lightblue',
                  padding: 10,
                  height: 50,
                  margin: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10
                }}
              >
                <Text
                >{item}</Text>
              </TouchableOpacity>
            )
          }
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View
        style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
      >
        <FlatList
          numColumns={2}
          data={eventData}
          renderItem={
            ({ item }) => (
              <EventCard
                event={item}
              />
            )
          }
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default HomeScreen;