import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default (dados) => {
    return (
        <TouchableOpacity style={styles.content} onPress={dados.onPress} >
            <Text>{ dados.nome }</Text>
            <View>
                <Text>Valor: { dados.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) } R$</Text>
                <Text>Duração: { dados.duracao == '1' ? "30 min" : "1 Hora" }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: 5,
        padding: 15,
        borderRadius: 10,
        borderColor: "#758918",
        borderWidth: 1,
        backgroundColor: "#FFF"
    }
})