import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from "../../Api";

import styles from "./styles";

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        // função para verificar se existe token salvo no storage
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            const nivel = await AsyncStorage.getItem('usuarioNivel');

            if (token) {
                let response = await Api.checkToken(token);
                if (response.token) {
                    await AsyncStorage.setItem('token', response.token);
                    
                    if (nivel == 1) {
                        navigation.reset({
                            routes:[{name: 'AdminDrawer'}]
                        })
                    } else {
                        navigation.reset({
                            routes:[{name: 'UsuarioDrawer'}]
                        })
                    }
                } else {
                    //Envia para login se o token for invalido
                    navigation.reset({
                       routes: [{name: 'Login'}]
                    });
                };
            } else {
                //Envia para login se o token não for encontrado
                navigation.reset({
                   routes: [{name: 'Login'}]
                });

            }
        }
        checkToken();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Agenda Pet</Text>
            <ActivityIndicator style={styles.loadin} size="large" color="#758918"/>
        </SafeAreaView>
    )
}