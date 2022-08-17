import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default () => {
    return (
        <TextInput style={styles.input} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 50,
        padding: 20,
        borderRadius: 25,
    }
})