import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

const EventRequest = ({ event }) => {
    const width = Dimensions.get('window').width
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('EventDescription', { event })}
            style={{ width: width / 2 - 20, height: 150, backgroundColor: 'white', borderRadius: 10, overflow: 'hidden', margin: 5 }}
        >
            <Image
                resizeMode='contain'
                source={{ uri: event.photo }}
                style={{ width: '100%', height: '50%' }}
            />
            <View
                style={{ backgroundColor: '#EEE', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}
            >
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Feather name="calendar" size={10} color="black" />
                    <Text
                        style={{ marginLeft: 2, fontSize: 10 }}>
                        {event.date}</Text>
                </View>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', }}
                >
                    <Feather name="clock" size={10} color="black" />
                    <Text
                        style={{ marginLeft: 2, fontSize: 10 }}>
                        {event.time}</Text>
                </View>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', }}
                >
                    <Feather name="user" size={10} color="black" />
                    <Text
                        style={{ marginLeft: 2, fontSize: 10 }}>
                        {event.Text}</Text>
                        </View>
            </View>
            <Text>{event.title}</Text>
        </TouchableOpacity>
    )
}

export default EventRequest

const styles = StyleSheet.create({})
