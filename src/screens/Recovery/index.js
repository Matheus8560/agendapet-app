import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');

    const handleLogin = () => {
        
    }

    const handleRecover = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                
                <View style={styles.recoverInfo}>
                    <Text>Informe seu e-mail. Uma nova senha será gerada e eviada para você.</Text>
                </View>

                <TextInput 
                    style={styles.input} 
                    placeholder="E-mail"
                    value={email}
                    onChangeText={t=>setEmail(t)}
                />
                
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginText}> Enviar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.recoveryButton} onPress={handleRecover}>
                    <Text> Voltar para login. </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}