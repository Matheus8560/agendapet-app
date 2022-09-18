import React from "react";
import { StyleSheet, Text, TouchableOpacity  } from "react-native";

export default ({onPress, text}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.cancelButton} >
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cancelButton: {
        backgroundColor: "#49281f",
        height: 50,
        width: "100%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },

    textButton: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18
    },
})