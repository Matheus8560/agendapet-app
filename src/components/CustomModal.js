import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View  } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import BtnCancelar from "./BtnCancelar";
import BtnConfirmar from "./BtnConfirmar";

export default BtnAdicionar = (props) => {
    return (
        <Modal visible={true} animationType='slide' transparent={true}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{props.header}</Text>
                        <TouchableOpacity onPress={props.onClose} style={styles.btnFechar} >
                            <AntDesign name="close" size={24} color="#FFF" />
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.body}>
                        <Text>{props.msg}</Text>
                    </View>
                    <View style={styles.footer}>
                        <BtnCancelar text="Cancelar" onPress={props.onClose}/>
                        <BtnConfirmar text="Confirmar" onPress={props.confirm}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.3)', 
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
        borderRadius: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#758918',
        padding: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 15,
        paddingHorizontal: 15,
        paddingBottom: 25,
        backgroundColor: '#FFF',
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        padding: 15,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    }
})