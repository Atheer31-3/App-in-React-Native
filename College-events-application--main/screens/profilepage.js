import React, { useEffect,useState } from 'react';
import {Title, View, Text, FlatList, ScrollView, RefreshControl,TouchableOpacity, StyleSheet,Image } from 'react-native';
import{Caption,TouchableRipple, Button} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { nameRequest, eventrequest } from '../src/data';
import CategoryComponent from '../src/components/CategoryComponent';
import EventRequest from '../src/components/EventRequest';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

//const request = [

 // { id: 1, title: 'Learn Python',user:'joud' },
 // { id: 2, title: 'Event Learn Javascript',user:'nada' },
  //{ id: 3, title: 'jave' ,user:'Atheer'},
 // { id: 4, title: 'Ux/Ui' ,user:'shaden'},
  // Add more event data as needed//];

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
  Image: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',     
    backgroundColor: 'white', 
    position: 'absolute',
    width: 100,  
    height: 100, 
    top: 0,   
    left: 150,
    right:150,
    resizeMode:"contain",
  },
  View:{
    borderRadius:10,
    borderColor:'lightblue',
    backgroundColor:'white',
    borderWidth:2,
  },
  horizontally: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  vertically: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: 25,
  },
  state: {
    headline: "head1",
    headline2: "head2",
    text: '', //  text input value
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
  }
  );




function ProfilePage({navigation}) {
  const [myFilteredData, setMyFilteredData] = useState(eventrequest);
  const [selectedCategory, setSelectedCategory] = useState("");
  // listen to selectedCategory state and refilter the FlatList data
  // based on the selected category
  useEffect(() => {
    if (selectedCategory !== "") {
      setMyFilteredData(eventrequest.filter(item => item.nameRequest === selectedCategory));
    }
    else {
      setMyFilteredData(eventrequest);
    }
  }, [selectedCategory])
  const [textInputText, setTextInputText] = useState('');
  const [sortState, setSortState] = useState(false);
  return (
    <View> 
          <Image resizeMode='contain'
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png' }}
        style={{ width: 100, height: 100,borderRadius:100 }}/>           
    <View style={{marginLeft:20}}>
      <Title style={styles.textStyle}>user </Title> <Caption style={styles.textStyle}>@user</Caption>
    </View >
      <View>
        <FlatList
          horizontal
          data={nameRequest}
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
        style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}
      >
        
        <FlatList
          numColumns={2}
          data={myFilteredData}
          renderItem={
            ({ item }) => (
              <EventRequest
                event={item}
              />
            )
          }
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
         <View>
          <Button title="Add" onPress={()=> navigation.navigate('Template')}/>
         </View>
      </View>
     
      </View>
  );
}

export default ProfilePage;
