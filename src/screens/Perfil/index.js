import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaskInput, { Masks } from 'react-native-mask-input';

import styles from "./styles";

import Header from "../../components/Header";
import BtnCancelar from "../../components/BtnCancelar";
import BtnConfirmar from "../../components/BtnConfirmar";

export default () => {
    const navigation = useNavigation();
    const [usuarioId, setUsuarioId] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirma, setSenhaConfirma] = useState('')

    const handleCancelar = () =>{
        navigation.navigate('HomeUsuarios');
    }
    const handleSalvar = () =>{
        navigation.navigate('HomeUsuarios');
    }

    // useEffect(()=>{
    
    // },[])

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo='Perfil' btn='menu'/>
            <ScrollView style={styles.content} behavior='position' enabled>
                <View style={styles.form}>
                    <Text style={styles.titulo}> Dados do usuario </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={v=>setNome(v)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={v=>setEmail(v)}
                    />
                    <MaskInput 
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Telefone"
                        value={telefone}
                        onChangeText={v=>setTelefone(v)}
                        mask={Masks.BRL_PHONE}
                    />                    
                </View>
                <View style={[styles.form, {marginTop: 8} ]} >
                    <Text style={styles.titulo}> Alterar Senha </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nova Senha"
                        value={senha}
                        onChangeText={v=>setSenha(v)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Senha"
                        value={senhaConfirma}
                        onChangeText={v=>setSenhaConfirma(v)}
                    />                  
                </View>
            </ScrollView>
            <View style={styles.btncontainer} >
                <BtnCancelar text="Cancelar" onPress={handleCancelar}/>
                <BtnConfirmar text="Confirmar" onPress={handleSalvar}/>
            </View>
        </SafeAreaView>
    )
}