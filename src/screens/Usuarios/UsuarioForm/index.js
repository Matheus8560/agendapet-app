import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, TextInput, View } from "react-native";
import MaskInput, { Masks } from 'react-native-mask-input';

import styles from "./styles";

import Header from "../../../components/Header";
import BtnCancelar from "../../../components/BtnCancelar";
import BtnConfirmar from "../../../components/BtnConfirmar";
import Api from "../../../Api";


export default ({route, navigation}) => {
    const [usuarioId, setUsuarioId] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefoneTela, setTelefoneTela] = useState('')
    const [telefone, setTelefone] = useState('')

    const handleCancelar = () =>{
        navigation.navigate('HomeUsuarios');
    }
    const handleSalvar = async () =>{
        if (nome != '' && email != '' && telefone != '') {
            const body ={
                nome: nome,
                email: email,
                telefone: telefone,
            }
            if (usuarioId != '') {
                const res = await Api.updateUsuario(body, usuarioId);

                if (res.email) {
                    Alert.alert(
                        'Sucesso',
                        `O usuário foi atualizado com sucesso.`,
                        [{
                            text: 'OK',
                            onPress: () => {
                                navigation.navigate('HomeUsuarios');
                            },
                        }],
                    );
                } else {
                    Alert.alert(
                        'Atenção',
                        res.erro
                    );
                }
            } else {
                const res = await Api.createUsuario(body);

                if (res.email) {
                    Alert.alert(
                        'Sucesso',
                        `O usuário foi cadastrado com sucesso.`,
                        [{
                            text: 'OK',
                            onPress: () => {
                                navigation.navigate('HomeUsuarios');
                            },
                        }],
                    );
                } else {
                    Alert.alert(
                        'Atenção',
                        res.erro
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

    useEffect(()=>{
        if (route.params) {
            setUsuarioId(route.params.usuario._id);
            setNome(route.params.usuario.nome);
            setEmail(route.params.usuario.email);
            setTelefoneTela(route.params.usuario.telefone);
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
                        autoCapitalize='none'
                    />
                    <MaskInput 
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Telefone"
                        value={telefone}
                        onChangeText={(masked, unmasked)=>{
                            setTelefoneTela(masked)
                            setTelefone(unmasked)
                        }}
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