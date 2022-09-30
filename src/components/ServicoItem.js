import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default (dados) => {
    return (
        dados.nivel ? 
            <View style={styles.containerAdmin}>
                <TouchableOpacity style={styles.contentAdmin} onPress={dados.onPress} >
                    <View style={{height:65, width:"65%"}}>
                        <Text style={styles.titulo}>{ dados.nome }</Text>
                        <Text style={styles.descricao}>
                            { dados.descricao.length > 35 ? dados.descricao.substr(0, 35)+"..."  : dados.descricao }
                        </Text>
                    </View>
                    <View>
                        <Text>Valor: R$ { dados.valor } </Text>
                        <Text>Duração: { dados.duracao == '1' ? "30 min" : "1 Hora" }</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.delete} onPress={dados.onDelete}>
                    <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
            :
            <TouchableOpacity style={styles.content} onPress={dados.onPress} >
                <View style={{height:65, width:"70%"}}>
                    <Text style={styles.titulo}>{ dados.nome }</Text>
                    <Text style={styles.descricao}>
                        { dados.descricao.length > 35 ? dados.descricao.substr(0, 35)+"..."  : dados.descricao }
                    </Text>
                </View>
                <View style={{height: "100%", width:"30%", alignItems: "center"}}>
                    <Text>Valor: { dados.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) } R$</Text>
                    <Text>Duração: { dados.duracao == '1' ? "30 min" : "1 Hora" }</Text>
                </View>
            </TouchableOpacity>
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
        justifyContent: "space-between",
        width: "86%",
        paddingRight: 15
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: "#758918",
        borderWidth: 1,
        backgroundColor: "#FFF"
    },
    delete: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "14%",
        borderLeftColor: "#758918",
        borderLeftWidth: 1,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#758918",
    }
})