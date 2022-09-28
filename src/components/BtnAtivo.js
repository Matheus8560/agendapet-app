import React from "react";
import { StyleSheet, Text, TouchableOpacity  } from "react-native";

export default ({ativo, onPress}) => {
    return (
        ativo ? <TouchableOpacity style={styles.ativoBtn} onPress={onPress}>
            <Text style={styles.textBtnAtivo}>Ativo</Text>
        </TouchableOpacity>
        :<TouchableOpacity style={styles.inativoBtn} onPress={onPress}>
            <Text style={styles.textBtnInAtivo}>Inativo</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ativoBtn: {
        borderRadius: 10,
        borderColor: "green",
        borderWidth: 1,
        backgroundColor: "#FFF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },

    inativoBtn: {
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 1,
        backgroundColor: "#FFF",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },

    textBtnAtivo: {
        color: "green",
        fontWeight: "bold",
        lineHeight:16,
        fontSize: 14
    },
    textBtnInAtivo: {
        color: "red",
        fontWeight: "bold",
        lineHeight:16,
        fontSize: 14
    },
})