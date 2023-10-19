import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


const CategoryComponent = ({
    item,
    setSelectedCategory,
    selectedCategory,
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                if (selectedCategory === item) {
                    setSelectedCategory("")
                } else {
                    setSelectedCategory(item)
                }
            }}
            style={{
                backgroundColor: selectedCategory === item ? "lightblue" : "white",
                // borderWidth: selectedCategory === item ? 1 : 0,
                // borderColor: selectedCategory === item ? "gray" : "gray",
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
                    color: selectedCategory === item ? "black" : "black",
                }}
            >
                {item}
            </Text>
        </TouchableOpacity>
    );
};

// export default CategoryComponent;

const styles = StyleSheet.create({});
