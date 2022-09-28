import React from "react";
import { StyleSheet, Text, TouchableOpacity  } from "react-native";

export default ({onPress, text}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.confirmButton} >
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    confirmButton: {
        backgroundColor: "#758918",
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },

    textButton: {
        color: "#FFF",
        fontWeight: "bold",
        lineHeight: 20,
        fontSize: 18
    },
})