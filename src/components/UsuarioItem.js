import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default (dados) => {
    return (
        <View style={styles.containerAdmin}>
            <TouchableOpacity style={styles.contentAdmin} onPress={dados.onPress} >
                <Text>{ dados.nome }</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete} onPress={dados.onDelete}>
                <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerAdmin: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginVertical: 5,
        paddingVertical: 15,
        paddingLeft: 15,
        borderRadius: 10,
        borderColor: "#758918",
        borderWidth: 1,
        backgroundColor: "#FFF"
    },
    contentAdmin: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "86%",
        paddingRight: 15
    },
    delete: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "14%",
        borderLeftColor: "#758918",
        borderLeftWidth: 1,
    }
})