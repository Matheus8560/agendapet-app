import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Modal, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import Api from "../../Api";

import Header from "../../components/Header";
import AgnendamentoItem from "../../components/AgnendamentoItem";
import CustomModal from "../../components/CustomModal";

import styles from "./styles";
import { coverteHora, formatarMoeda } from "../../utils";

export default () => {
    const navigation = useNavigation();

    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [lista, setLista] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getAgendamentos = async (params = '') => {
        setLoading(true);
        setLista([]);

        let res = await Api.getAgendamentos(params);
        if(!res.error) {
            setLista(res);
        } else {
            alert("Erro: "+res.error);
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

    // const handleSearch = () => {
    //     if (search == '') {
    //     } else {
    //         const listaFiltrada = lista.filter(
    //             function (item) {
    //                 const itemData = item.nome
    //                 ? item.nome.toUpperCase()
    //                 : ''.toUpperCase();
    //             const textData = search.toUpperCase();
    //             return itemData.indexOf(textData) > -1;
    //             }
    //         );
    //     }
    // }

    const handleDelete = (agendamento) => {
        setModalOpen(true)
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
                                onDelete={() => handleDelete(item)}
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
                    confirm={() => console.log("exclui")}
                />
            : null }                   
        </SafeAreaView>
    )
}