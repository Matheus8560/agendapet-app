import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function DrawerContent(props) {

    const navigation = useNavigation();
    const handleLogout = async() => {
        await AsyncStorage.setItem('usuariId', '')
        await AsyncStorage.setItem('usuarioNome', '')
        await AsyncStorage.setItem('usuarioNivel', '')
        await AsyncStorage.setItem('token', '')

        navigation.reset({
            routes:[{name: 'Login'}]
        })
    }

    return(
        <View style={styles.DrawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.Titulo}>
                    <Text> Agenda Pet </Text>
                </View>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View style={styles.LogoutSection}>
                <TouchableOpacity onPress={handleLogout} style={styles.Logout}>
                    <Text style={styles.LogoutText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    DrawerContent: {
        flex: 1
    },
    Titulo: {
        paddingLeft: 15,
        paddingBottom: 5,
        marginBottom: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    LogoutSection: {
        borderTopColor: '#ccc',
        borderTopWidth: 1
    },
    Logout: {
        padding: 15,
    },
    LogoutText: {
       color: '#585555',
       fontWeight: '500'
    }
})