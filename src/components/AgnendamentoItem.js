import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import moment from "moment";
import 'moment/locale/pt-br'

export default (dados) => {
    moment.locale('pt-br')
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>{ dados.nomeServico }</Text>
                <TouchableOpacity style={styles.delete} onPress={dados.onDelete}>
                    <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.bodyItem}>
                    Data: { moment(dados.data).utcOffset("-03:00").startOf('day').format("DD/MM/YYYY") } 
                    { moment(dados.data).format(" - dddd") }
                </Text>
                <Text style={styles.bodyItem}>Usuario: { dados.usuario } </Text>
                <Text style={styles.bodyItem}>Valor: R$ { dados.valor } </Text>
                <Text style={styles.bodyItem}>Horário: { dados.hora } </Text>
                <Text style={styles.bodyItem}>Duração: { dados.duracao == '1' ? "30 min" : "1 Hora" }</Text>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginVertical: 5,
        paddingVertical: 15,
        paddingLeft: 15,
        borderRadius: 10,
        borderColor: "#758918",
        borderWidth: 1,
        backgroundColor: "#FFF"
    },
    Header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10
    },
    HeaderText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#758918",
    },
    delete: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "14%",
    },
    bodyItem: {
        marginBottom: 3
    }
})