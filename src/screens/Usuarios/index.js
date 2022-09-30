import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Alert, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import Api from "../../Api";

import BtnAdicionar from "../../components/BtnAdicionar";
import Header from "../../components/Header";
import UsuarioItem from "../../components/UsuarioItem";

import styles from "./styles";
import CustomModal from "../../components/CustomModal";

export default () => {
    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState();
    const [loading, setLoading] = useState(true);
    const [listaOriginal, setListaOriginal] = useState([]);
    const [listaFiltro, setListaFiltro] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getUsuario = async (params = '') => {
        setLoading(true);
        setListaOriginal([]);

        let res = await Api.getUsuario(params);
        if(!res.error) {
            setListaOriginal(res);
            setListaFiltro(res);
        } else {
            Alert.alert(
                'Erro',
                res.error,
            );
        }

        setLoading(false);
    }

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {
            getUsuario();
        });

        return unsubscribe;
    }, [navigation]);

    const onRefresh = () => {
        setRefreshing(false);
        getUsuario();
    }

    const handleSearch = () => {
        if (search == '') {
            setListaFiltro(listaOriginal);
        } else {
            const listaFiltrada = listaOriginal.filter(
                function (item) {
                    const itemData = item.nome
                    ? item.nome.toUpperCase()
                    : ''.toUpperCase();
                const textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
                }
            );
            setListaFiltro(listaFiltrada);
        }
    }

    const handleAdicionar = () => {
        navigation.navigate('UsuarioForm');
    }

    const handleUsuario = (usuario) => {
        navigation.navigate('UsuarioForm', { usuario });
    }

    const handleDelete = async (id) => {
        const res = await Api.deleteUsuario(id);
        if (res.msg) {
            setModalOpen(false);
            setDeleteId();
            getUsuario();
            Alert.alert(
                'Sucesso',
                res.msg,
            );
        } else {
            Alert.alert(
                'Sucesso',
                res.erro,
            );
        };
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo='Usuários' btn='menu'/>
            <TextInput 
                style={styles.inputSearch} 
                placeholder="Buscar usuario pelo nome"
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
                            item.nivel!=1 &&
                                <UsuarioItem 
                                    key={k}
                                    nome={item.nome}
                                    onPress={() => handleUsuario(item)}
                                    onDelete={() =>  {
                                        setModalOpen(true) 
                                        setDeleteId(item._id)
                                    }}
                                />
                        ))
                    }

                </View>
            </ScrollView>    
            <BtnAdicionar onPress={handleAdicionar} />  
            {modalOpen ? 
                <CustomModal
                    header="Exclusão de Usuário"
                    onClose={() => setModalOpen(!modalOpen)}
                    msg="Deseja realmente excluir este usuário e todos os agendamentos ligados a ele?"
                    confirm={() => handleDelete(deleteId)}
                />
            : null }                 
        </SafeAreaView>
    )
}