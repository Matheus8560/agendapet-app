import React from "react";
import { StyleSheet, Text, TouchableOpacity  } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default BtnAdicionar = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn} >
            <AntDesign name="plus" size={32} color="#FFF" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'absolute',
        bottom: 10,
        height: 60,
        backgroundColor: '#758918',
        borderRadius: 100,
    }
})