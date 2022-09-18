import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default ({titulo, btn}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {
                btn === "menu" ?
                    <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.openDrawer()}>
                        <Feather name="menu" size={25} color='#FFF' />
                    </TouchableOpacity>
                :
                    <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={25} color='#FFF' />
                    </TouchableOpacity>

            }
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 18,
        paddingTop: 25,
        paddingBottom: 10,
        backgroundColor: '#758918'
    },
    btnMenu: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    titulo: {
        
        color: '#FFF',
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 14,
    }
})