import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Modal, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import Api from "../../Api";

import ServicoItem from "../../components/ServicoItem";
import BtnAdicionar from "../../components/BtnAdicionar";
import { formatarMoeda } from "../../utils";

import styles from "./styles";
import Header from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [listaOriginal, setListaOriginal] = useState([]);
    const [listaFiltro, setListaFiltro] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getServicos = async (params = '') => {
        setLoading(true);
        setListaOriginal([]);

        let res = await Api.getServicos(params);
        if(!res.error) {
            setListaOriginal(res);
            setListaFiltro(res);
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    const getNivel = async () => {
        nivel = await AsyncStorage.getItem('usuarioNivel');
        if (nivel == 1) {
            setIsAdmin(true);
        }
    }

    useEffect(()=>{
        getServicos();
        getNivel();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getServicos();
    }

    const handleSearch = () => {
        if (search == '') {
            setListaFiltro(listaOriginal);
        } else {
            const listaFiltrada = listaOriginal.filter(
                function (item) {
                    const itemData = item.titulo
                    ? item.titulo.toUpperCase()
                    : ''.toUpperCase();
                const textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
                }
            );
            setListaFiltro(listaFiltrada);
        }
    }

    const handleAdicionar = () => {
        navigation.navigate('ServicosForm');
    }

    const handleServico = (servico) => {
        navigation.navigate('ServicosForm', { servico });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo='Serviços' btn='menu'/>
            <TextInput 
                style={styles.inputSearch} 
                placeholder="Buscar serviço pelo nome"
                value={search}
                onChangeText={t=>setSearch(t)}
                onEndEditing={handleSearch}
            />
            <ScrollView style={{width:'95%'}} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <View style={styles.listagem}>
                    {loading &&
                        <ActivityIndicator size="large" color="#758918" />
                    }
                    
                    {!loading &&
                        listaFiltro.map((item, k)=>(
                            <ServicoItem 
                                key={k}
                                nome={item.titulo}
                                descricao={item.descricao}
                                nivel={isAdmin}
                                valor={formatarMoeda(item.valor/100)}
                                duracao={item.duracao}
                                onPress={() => handleServico(item)}
                                onDelete={() => handleServico(item)}
                            />
                        ))
                    }

                </View>
            </ScrollView>    
            {isAdmin && <BtnAdicionar onPress={handleAdicionar} /> }                  
        </SafeAreaView>
    )
}