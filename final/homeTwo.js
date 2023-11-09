import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, ScrollView, Text, TextInput } from "react-native";
import {finalexam } from "./firebaseConfig";
import { onValue, ref, set, remove, update } from "firebase/database";
import { uid } from "uid";

function HomeTwo () {
  const uuId = uid();
  const [x, setName] = useState("");
  const [data, setData] = useState([]);
  
  // read
  useEffect(() => {
    const startCountref = ref(finalexam);
    onValue(startCountref, (shot) => {
      setData(Object.values(shot.val() || {}));
    });
  }, []);

  // create
  const addUser = () => {
    set(ref(finalexam, uuId), {
      name: x,
      id: uuId,
    });
    setName("");
  };

  // delete
  const handleDelete = (id) => {
    remove(ref(finalexam, id));
  };

  // update
  const handleUpdate = (id) => {
    update(ref(finalexam, id), {
      name: x,
    });
    setName("");
  };

  return (
    <View style={styles.container}>
      <>
        <Text style={{ fontSize: 18, width: 80, height: 80, top: 60 }}>Name:</Text>
        <TextInput
          style={styles.input}
          value={x}
          onChangeText={(value) => setName(value)}
        />

        <Pressable style={styles.addBtn} onPress={addUser}>
          <Text style={styles.text}>Add</Text>
        </Pressable>
      </>
      {data.map((ele) => (
        <Text key={ele.id}>{ele.name}</Text>

      ))}

      <ScrollView style={{ height: 300 }} showsVerticalScrollIndicator={false}>
        {data.map((ele) => (
          <View style={{ marginTop: 10 }} key={ele.id}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>{ele.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={{ backgroundColor: "#dddd", borderRadius: 5, flex: 1, marginEnd: 3 }}
                onPress={() => handleUpdate(ele.id)}
                
              >
                <Text style={{ fontSize: 16, textAlign: "center", padding: 5 }}>Edit</Text>
              </Pressable>
              <Pressable
                style={{ backgroundColor: "#ff0009", borderRadius: 5, flex: 1, height: 80, width: 80 }}
                onPress={() => handleDelete(ele.id)}
              >
                <Text style={{ fontSize: 16, textAlign: "center", padding: 5, color: "white" }}>Delete</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 10,
    height: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#263238",
    borderRadius: 5,
    color: "black",
    padding: 5,
    textAlign: "left",
  },
  addBtn: {
    backgroundColor: "#00796b",
    padding: 5,
    borderRadius: 6,
    marginTop: 10,
  },
  text: {
    padding: 5,
    color: "white",
    textAlign: "center",
    fontSize: 19,
  },
});

export default HomeTwo;
