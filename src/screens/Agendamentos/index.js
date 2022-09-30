import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Alert, Modal, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import Api from "../../Api";

import Header from "../../components/Header";
import AgnendamentoItem from "../../components/AgnendamentoItem";
import CustomModal from "../../components/CustomModal";

import styles from "./styles";
import { coverteHora, formatarMoeda } from "../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const navigation = useNavigation();

    const [modalOpen, setModalOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [lista, setLista] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [deleteId, setDeleteId] = useState(false);

    const getAgendamentos = async (params = '') => {
        setLoading(true);
        setLista([]);
        id = await AsyncStorage.getItem('usuariId');
        nivel = await AsyncStorage.getItem('usuarioNivel');

        if (nivel == 1) {
            let res = await Api.getAgendamentos(params);
            if(!res.error) {
                setLista(res);
            } else {
                alert("Erro: "+res.error);
            }
        } else {
            let res = await Api.getAgendamentos(`/?clienteId=${id}`);
            if(!res.error) {
                setLista(res);
            } else {
                alert("Erro: "+res.error);
            }
        }

        setLoading(false);
    }

    useEffect(()=>{
        getAgendamentos();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getAgendamentos();
    }

    const handleDelete = async (id) => {
        const res = await Api.deleteAgendamento(id);
        if (res.msg) {
            setModalOpen(false);
            setDeleteId();
            getAgendamentos();
            Alert.alert(
                'Sucesso',
                res.msg,
            );
        } else {
            setModalOpen(false);
            setDeleteId();
            getAgendamentos();
            Alert.alert(
                'erro',
                res.erro,
            );
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo='Agendamentos' btn='menu'/>
            <ScrollView style={{width:'95%'}} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <View style={styles.listagem}>
                    {loading &&
                        <ActivityIndicator size="large" color="#758918" />
                    }
                    
                    {!loading &&
                        lista.map((item, k)=>(
                            <AgnendamentoItem 
                                key={k}
                                nomeServico={item.servicoId.titulo}
                                data={item.data}
                                hora={coverteHora(item.hora[0])}
                                usuario={item.clienteId.nome}
                                valor={formatarMoeda(item.valor/100)}
                                duracao={item.servicoId.duracao}
                                onDelete={() => {
                                    setModalOpen(true) 
                                    setDeleteId(item._id)
                                }}
                            />
                        ))
                    }

                </View>
            </ScrollView> 

            {modalOpen ? 
                <CustomModal
                    header="Exclusão de Agendamento"
                    onClose={() => setModalOpen(!modalOpen)}
                    msg="Deseja realmente excluir este agendamento?"
                    confirm={() => handleDelete(deleteId)}
                />
            : null }                   
        </SafeAreaView>
    )
}