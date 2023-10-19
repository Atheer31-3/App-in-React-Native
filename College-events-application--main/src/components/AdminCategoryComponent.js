import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AdminCategoryComponent = ({
    item,
    setSelectedCategory,
    selectedCategory,
    index
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                if (index == 0) {
                    setSelectedCategory("")
                    return
                }
                if (selectedCategory === item) {
                    setSelectedCategory("")
                } else {
                    setSelectedCategory(item)
                }
            }}
        >
            {index == 0 ?
                <View
                    style={{
                        backgroundColor: selectedCategory === "" ? "lightblue" : "white",
                        padding: 10,
                        height: 50,
                        margin: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            color: "black",
                        }}
                    >
                        {item}
                    </Text>
                </View>
                :
                <View
                    style={{
                        backgroundColor: selectedCategory === item ? "lightblue" : "white",
                        padding: 10,
                        height: 50,
                        margin: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            color: "black",
                        }}
                    >
                        {item}
                    </Text>
                </View>
            }

        </TouchableOpacity>
    );
};

export default AdminCategoryComponent;

const styles = StyleSheet.create({});
