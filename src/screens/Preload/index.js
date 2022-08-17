import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./styles";

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        // função para verificar se existe token salvo no storage
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');

            if (token) {
                let response = await Api.checkToken(token);
                if (response.token) {
                    await AsyncStorage.setItem(response);
                    navigation.reset({
                        routes:[{name: 'AdminDrawer'}]
                    })
                }
            } else {
                //Envia para login
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