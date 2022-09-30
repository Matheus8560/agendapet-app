import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaskInput, { Masks } from 'react-native-mask-input';

import styles from "./styles";

import Header from "../../components/Header";
import BtnCancelar from "../../components/BtnCancelar";
import BtnConfirmar from "../../components/BtnConfirmar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../../Api";

export default () => {
    const navigation = useNavigation();
    const [usuarioId, setUsuarioId] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [telefoneTela, setTelefoneTela] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirma, setSenhaConfirma] = useState('')

    const handleCancelar = () =>{
        getDados();
        setSenha('')
        setSenhaConfirma('')
    }

    const handleSalvar = async () =>{
        if (nome != '' && email != '' && telefone != '') {

            if (senha != '') {

                if (senha === senhaConfirma) {
                    
                    if (senha.length >= 6) {
                        const body ={
                            nome: nome,
                            email: email,
                            telefone: telefone,
                            senha: senha
                        }
                        const res = await Api.updateUsuario(body, usuarioId);
        
                        if (res.email) {
                            getDados();
                            setSenha('')
                            setSenhaConfirma('')
                            Alert.alert(
                                'Sucesso',
                                `Usuário atualizado com sucesso.`
                            );
                        } else {
                            Alert.alert(
                                'Atenção',
                                `Falha da validação. Verifique os dados!`
                            );
                        }
                    } else {
                        Alert.alert(
                            'Atenção',
                            `Senha deve conter no minimo 6 caracteres.`
                        );
                    }
                } else {
                    Alert.alert(
                        'Atenção',
                        `Confirmação de senha não confere.`
                    );
                }
            } else {
                const body ={
                    nome: nome,
                    email: email,
                    telefone: telefone,
                }
                const res = await Api.updateUsuario(body, usuarioId);

                if (res.email) {
                    getDados();
                    Alert.alert(
                        'Sucesso',
                        `Usuário atualizado com sucesso.`,
                    );
                } else {
                    Alert.alert(
                        'Atenção',
                        `Falha da validação. Verifique os dados!`
                    );
                }
            }
        } else {
            Alert.alert(
                'Atenção',
                `Preencha os dados obrigatórios.`,
            );
        }
    }

    const getDados = async () => {
        const id = await AsyncStorage.getItem('usuariId');

        let res = await Api.getUsuario(`?_id=${id}`);
        if(!res.error) {
            setUsuarioId(res[0]._id)
            setNome(res[0].nome)
            setEmail(res[0].email)
            setTelefone(res[0].telefone)
            setTelefoneTela(res[0].telefone)
        } else {
            alert("Erro: "+res.error);
        }
    }

    useEffect(()=>{
        getDados();
    },[])

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
                        autoCapitalize='none'
                    />
                    <MaskInput 
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Telefone"
                        value={telefoneTela}
                        onChangeText={(masked, unmasked)=>{
                            setTelefoneTela(masked)
                            setTelefone(unmasked)
                        }}
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
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Senha"
                        value={senhaConfirma}
                        onChangeText={v=>setSenhaConfirma(v)}
                        secureTextEntry={true}
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