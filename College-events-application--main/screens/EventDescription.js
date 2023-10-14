import React, { useEffect } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const EventDescription = ({ navigation, route }) => {
  const { event } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: event.title });
  }, []);

  return (
    <ScrollView>
      <Image
        resizeMode='contain'
        source={{ uri: event.photo }} style={{ width: '100%', height: 100 }} />
      <View
        style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}
      >
        <View
          style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Feather name="calendar" size={14} color="black" />
          <Text
            style={{ marginLeft: 2, fontSize: 14 }}>
            {event.date}</Text>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', }}
        >
          <Feather name="clock" size={14} color="black" />
          <Text
            style={{ marginLeft: 2, fontSize: 14 }}>
            {event.time}</Text>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', }}
        >
          <Feather name="map-pin" size={14} color="black" />
          <Text
            style={{ marginLeft: 2, fontSize: 14 }}
          >
            {event.location}
          </Text>
        </View>

      </View>
      <View style={{ marginTop: 20, marginLeft: 12 }}>
        <Text style={{ fontSize: 22 }}>{event.description}</Text>
      </View>
    </ScrollView>
  );
};

export default EventDescription;