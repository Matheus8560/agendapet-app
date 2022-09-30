import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Api from "../../Api";

export default () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');

    const handleLogin = () => {
        navigation.navigate('Login')
    }

    const handleRecover = async () => {
        if (email != '') {
            
            let response = await Api.recovery(email);
            if (response.successo) {
                Alert.alert(
                    'Sucesso',
                    'Uma nova senha foi gerada e encaminhada para seu e-mail.',
                );
                navigation.navigate('Login')
            } else {
                Alert.alert(
                    'Erro',
                    response.erro,
                );
            }

        } else {
            Alert.alert(
                'Atenção',
                'Preencha seu e-mail.',
            );
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titulo}>Agenda Pet</Text>
                <View style={styles.recoverInfo}>
                    <Text>Informe seu e-mail. Uma nova senha será gerada e eviada para você.</Text>
                </View>

                <TextInput 
                    style={styles.input} 
                    placeholder="E-mail"
                    value={email}
                    onChangeText={t=>setEmail(t)}
                    autoCapitalize='none'
                />
                
                <TouchableOpacity style={styles.loginButton} onPress={handleRecover}>
                    <Text style={styles.loginText}> Enviar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.recoveryButton} onPress={handleLogin}>
                    <Text> Voltar para login. </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}