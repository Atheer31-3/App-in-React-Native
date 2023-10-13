import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const EventCard = ({ event }) => {
    const width = Dimensions.get('window').width
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('EventDescription', { event })}
            style={{ width: width / 2 - 20, height: 150, backgroundColor: 'white', borderRadius: 10, overflow: 'hidden', margin: 5 }}
        >
            <Image
                source={{ uri: event.photo }}
                style={{ width: '100%', height: '50%' }}
            />
            <Text>{event.title}</Text>
        </TouchableOpacity>
    )
}

export default EventCard

const styles = StyleSheet.create({})