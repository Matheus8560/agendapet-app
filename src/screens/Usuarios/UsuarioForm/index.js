import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native";
import MaskInput, { Masks } from 'react-native-mask-input';

import styles from "./styles";

import Header from "../../../components/Header";
import BtnCancelar from "../../../components/BtnCancelar";
import BtnConfirmar from "../../../components/BtnConfirmar";


export default ({route, navigation}) => {
    const [usuarioId, setUsuarioId] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const handleCancelar = () =>{
        navigation.navigate('HomeUsuarios');
    }
    const handleSalvar = () =>{
        navigation.navigate('HomeUsuarios');
    }

    useEffect(()=>{
        if (route.params) {
            setUsuarioId(route.params.usuario._id);
            setNome(route.params.usuario.nome);
            setEmail(route.params.usuario.email);
            setTelefone(route.params.usuario.telefone);
        }
    },[])

    return (
        <SafeAreaView style={styles.container}>
            {usuarioId != '' ? <Header titulo='Editar Usuário'/> : <Header titulo='Cadastrar Usuário'/>}
            <ScrollView style={styles.content} behavior='position' enabled>
                <View style={styles.form}>
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
            </ScrollView>
            <View style={styles.btncontainer}>
                <BtnCancelar text="Cancelar" onPress={handleCancelar}/>
                <BtnConfirmar text="Confirmar" onPress={handleSalvar}/>
            </View>
        </SafeAreaView>
    )
}