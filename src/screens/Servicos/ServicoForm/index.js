import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, TextInput, ToastAndroid, View } from "react-native";

import {Picker} from '@react-native-picker/picker';
import MaskInput, { Masks } from 'react-native-mask-input';

import styles from "./styles";
import { formatarMoeda } from "../../../utils";

import Header from "../../../components/Header";
import BtnCancelar from "../../../components/BtnCancelar";
import BtnConfirmar from "../../../components/BtnConfirmar";
import Api from "../../../Api";

export default ({route, navigation}) => {
    const [servicoId, setServicoId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valorTela, setValorTela] = useState('')
    const [valor, setValor] = useState('')
    const [duracao, setDuracao] = useState()
    const [loading, setLoading] = useState(true)

    const handleCancelar = () =>{
        navigation.navigate('HomeServicos');
    }
    const handleSalvar = async () =>{
        if (titulo != '' && descricao != '' && valor != '' && duracao != '') {
            const body ={
                titulo: titulo,
                descricao: descricao,
                valor: valor,
                duracao:duracao
            }
            if (servicoId != '') {
                const res = await Api.updateServico(body, servicoId);

                if (res._id) {
                    Alert.alert(
                        'Sucesso',
                        `O serviço foi atualizado com sucesso.`,
                        [{
                            text: 'OK',
                            onPress: () => {
                                navigation.navigate('HomeServicos');
                            },
                        }],
                    );
                }
            } else {
                const res = await Api.createServico(body);

                if (res._id) {
                    Alert.alert(
                        'Sucesso',
                        `O serviço foi cadastrado com sucesso.`,
                        [{
                            text: 'OK',
                            onPress: () => {
                                navigation.navigate('HomeServicos');
                            },
                        }],
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
            setServicoId(route.params.servico._id);
            setTitulo(route.params.servico.titulo);
            setDescricao(route.params.servico.descricao);
            setValorTela(formatarMoeda(route.params.servico.valor/100));
            setValor(route.params.servico.valor);
            setDuracao(route.params.servico.duracao);
            setLoading(false)
        } else {
            setLoading(false)
        }
    },[])

    return (
        <SafeAreaView style={styles.container}>
            {servicoId != '' ? <Header titulo='Editar Serviço'/> : <Header titulo='Cadastrar Serviço'/>}
            <ScrollView style={styles.content} behavior='position' enabled>
                {!loading &&
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Titulo"
                            value={titulo}
                            onChangeText={v=>setTitulo(v)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Descricao"
                            value={descricao}
                            onChangeText={v=>setDescricao(v)}
                        />
                        <MaskInput 
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="Valor"
                            value={valorTela}
                            onChangeText={(masked, unmasked)=>{
                                setValorTela(masked)
                                setValor(unmasked)
                            }}
                            mask={Masks.BRL_CURRENCY}
                        />
                        <View style={styles.piker}>
                            <Picker
                                selectedValue={duracao}
                                onValueChange={(v)=>setDuracao(v)}
                            >
                                <Picker.Item label="30 min" value={1} />
                                <Picker.Item label="1 hora" value={2} />
                            </Picker>
                        </View>
                        
                    </View>
                }
            </ScrollView>
            <View style={styles.btncontainer}>
                <BtnCancelar text="Cancelar" onPress={handleCancelar}/>
                <BtnConfirmar text="Confirmar" onPress={handleSalvar}/>
            </View>
        </SafeAreaView>
    )
}