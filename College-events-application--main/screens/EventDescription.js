import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';

 const EventDescription = ({ navigation, route }) => {
  const { event } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: event.title });
  }, []);

  return (
    <View>
      <Image source={{ uri: event.photo }} style={{ width: '100%', height: 100 }} />
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 20 }}>{event.description}</Text>
      </View>
    </View>
  );
};

export default EventDescription;