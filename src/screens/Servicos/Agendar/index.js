import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";
import moment from 'moment';
import 'moment/locale/pt-br';


import Api from "../../../Api";
import { coverteHora, formatarMoeda } from "../../../utils";

import styles from "./styles";
import Header from "../../../components/Header";
import CustomModal from "../../../components/CustomModal";
import BtnConfirmar from "../../../components/BtnConfirmar";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({route, navigation}) => {
    moment.locale('pt-br')

    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [vagas, setVagas] = useState([]);

    const [servicoId, setServicoId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const [duracao, setDuracao] = useState()
    const [horario, setHorario] = useState()
    const [dia, setdia] = useState()

    const getDisponibilidade = async (params = '') => {
        setLoading(true);
        setVagas([]);

        let res = await Api.getDisponibilidade(params);
        if(!res.error) {
            setVagas(res);
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    const handleAgenda = async () => {
        const usuarioId = await AsyncStorage.getItem("usuariId");

        if (duracao == 1) {
            const body = {
                servicoId: servicoId,
                clienteId: usuarioId,
                data: dia,
                hora: [horario],
                valor: valor
            }
            const res = await Api.createAgendamento(body);

            if (res._id) {
                Alert.alert(
                    'Sucesso',
                    `Seu serviço foi agendado com sucesso.`,
                    [{
                        text: 'OK',
                        onPress: () => {
                            navigation.reset({
                                routes:[{name: 'Agendamentos'}]
                            })
                        },
                    }],
                );
            } else {
                setModalOpen(!modalOpen)
                Alert.alert(
                    'Erro',
                    'Não foi possivel completar agendamento. Tente outro horário.',
                );
            }
        } else {
            const body = {
                servicoId: servicoId,
                clienteId: usuarioId,
                data: dia,
                hora: [horario, horario+1],
                valor: valor
            }

            const res = await Api.createAgendamento(body);

            if (res._id) {
                Alert.alert(
                    'Sucesso',
                    `Seu serviço foi agendado com sucesso.`,
                    [{
                        text: 'OK',
                        onPress: () => {
                            navigation.reset({
                                routes:[{name: 'Agendamentos'}]
                            })
                        },
                    }],
                );
            } else {
                setModalOpen(!modalOpen)
                Alert.alert(
                    'Erro',
                    'Não foi possivel completar agendamento. Tente outro horário.',
                );
            }
        }
    }

    useEffect(()=>{
        setServicoId(route.params.servico._id);
        setTitulo(route.params.servico.titulo);
        setDescricao(route.params.servico.descricao);
        setValor(route.params.servico.valor);
        setDuracao(route.params.servico.duracao);
        getDisponibilidade(`/?espacos=${route.params.servico.duracao}`);
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getDisponibilidade(`/?espacos=${duracao}`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo='Agendar Serviço' />
            <ScrollView style={{width:'95%'}} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <View style={styles.listagem}>
                    {loading &&
                        <ActivityIndicator size="large" color="#758918" />
                    }
                    
                    {!loading &&
                        vagas.map((item, k)=>(
                            <View key={k} style={styles.cardContainer}>
                                <Text style={styles.data}>
                                    { moment(item.dia).utcOffset("-03:00").format("DD/MM/YYYY") }
                                    { moment(item.dia).format(" - dddd") }
                                </Text>
                                <View style={styles.servicoInfo}>    
                                    <View style={{height:65, width:"65%"}}>
                                        <Text>{titulo}</Text>
                                        <Text>
                                            { descricao.length > 35 ? descricao.substr(0, 35)+"..."  : descricao }
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>Valor: R$ {formatarMoeda(valor/100)}</Text>
                                        <Text>Duração: {duracao == '1' ? "30 min" : "1 Hora"}</Text>
                                    </View>
                                </View>

                                <View style={{padding:15}}>
                                    <Text style={styles.escolhaText}>Escolha um horário</Text>
                                    {item.horarios.map((hora, k)=>(
                                        <View key={k} style={styles.horaItem}>
                                            <Text style={styles.horaItemText}>
                                                { coverteHora(hora) }
                                            </Text>
                                            <View style={{width: '40%'}}>
                                                <BtnConfirmar
                                                    onPress={() => {
                                                        setModalOpen(true) 
                                                        setHorario(hora)
                                                        setdia(moment(item.dia).format("YYYY-MM-DD")+'T12:00:00Z')
                                                    }}
                                                    text="Agendar"
                                                />
                                            </View>
                                        </View>
                                    ))}
                                </View>

                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            {modalOpen ? 
                <CustomModal
                    header="Confirmar Agendamento"
                    msg="Realmente deseja confirmar o agendamento deste serviço?" 
                    onClose={() => setModalOpen(!modalOpen)}
                    confirm={() => handleAgenda()}
                />
            : null }          
        </SafeAreaView>
    )
}