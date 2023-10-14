import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { categories, eventData } from '../src/data';
import EventCard from '../src/components/EventCard';
import CategoryComponent from '../src/components/CategoryComponent';
import { Feather } from '@expo/vector-icons';
function HomeScreen({ navigation }) {
  const [myFilteredData, setMyFilteredData] = useState(eventData);
  const [selectedCategory, setSelectedCategory] = useState("");

  // listen to selectedCategory state and refilter the FlatList data
  // based on the selected category
  useEffect(() => {
    if (selectedCategory !== "") {
      setMyFilteredData(eventData.filter(item => item.category === selectedCategory));
    }
    else {
      setMyFilteredData(eventData);
    }
  }, [selectedCategory])
  const [textInputText, setTextInputText] = useState('')

  return (
    <View style={{ flex: 1, }}>
      <View

        style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}
      >
        <View
          style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10 }}
        >
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder='Search'
            style={{
              flex: 1,
              height: 40,
              borderColor: 'gray',

            }}
            value={textInputText}
            onChangeText={
              (text) => {
                setTextInputText(text)
                setMyFilteredData(eventData.filter(item => item.title.toLowerCase().includes(text.toLowerCase())))
              }
            }
            autoCapitalize='none'
          />
          {textInputText &&
            <TouchableOpacity
              onPress={() => {
                setMyFilteredData(eventData.filter(item => item.title.toLowerCase().includes(textInputText.toLowerCase())))
                setTextInputText('')
              }}
            >
              <Feather
                disabled
                name="x" size={24} color="black" />
            </TouchableOpacity>
          }
        </View>
      </View>
      <View>
        <FlatList
          horizontal
          data={categories}
          renderItem={
            ({ item, index }) => (
              <CategoryComponent item={item}
                index={index}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
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
          data={myFilteredData}
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