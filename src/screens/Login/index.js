import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import Api from "../../Api";

import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async() => {
        if (email != '' && senha != '') {
            
            let response = await Api.login(email, senha);
            if (response.token) {
                await AsyncStorage.setItem('usuariId', response._id)
                await AsyncStorage.setItem('usuarioNome', response.nome)
                await AsyncStorage.setItem('usuarioNivel', response.nivel)
                await AsyncStorage.setItem('token', response.token)
                
                if (response.nivel == 1) {
                    navigation.reset({
                        routes:[{name: 'AdminDrawer'}]
                    })
                }
            } else {
                alert(response.erro)
            }

        } else {
            alert('Prença os campos!');
        }    
    }

    const handleRecover = () => {
        navigation.navigate('Recovery')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <TextInput 
                    style={styles.input} 
                    placeholder="E-mail"
                    value={email}
                    onChangeText={t=>setEmail(t)}
                    autoCapitalize='none'
                />

                <TextInput 
                    style={styles.input} 
                    placeholder="Senha"
                    value={senha}
                    onChangeText={t=>setSenha(t)}
                    secureTextEntry={true}
                />
                
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginText}> Entrar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.recoveryButton} onPress={handleRecover}>
                    <Text> Esqueceu sua senha? </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}