import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View  } from "react-native";

export default BtnAdicionar = ({props, children}) => {
    return (
        <Modal visible={true} animationType='slide' transparent={true}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{props.header}</Text>
                        <TouchableOpacity onPress={onPress} style={styles.btnFechar} >
                            <Text>X</Text>
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.body}>
                        {children}
                    </View>
                    <View style={styles.footer}>

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
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
        borderRadius: 5,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#758918',
    }
})