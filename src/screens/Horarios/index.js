import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Modal, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import Api from "../../Api";

import BtnAdicionar from "../../components/BtnAdicionar";
import Header from "../../components/Header";
import UsuarioItem from "../../components/UsuarioItem";

import styles from "./styles";
import PikerHora from "../../components/PikerHora";
import BtnAtivo from "../../components/BtnAtivo";

export default () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [listaHorarios, setListaHorarios] = useState([]);

    const [domInicio, setDomInicio] = useState();
    const [domFim, setDomFim] = useState();
    const [domAtivo, setDomAtivo] = useState();
    const [domId, setDomId] = useState();

    const [segInicio, setSegInicio] = useState();
    const [segFim, setSegFim] = useState();
    const [segAtivo, setSegAtivo] = useState();
    const [segId, setSegId] = useState();

    const [terInicio, setTerInicio] = useState();
    const [terFim, setTerFim] = useState();
    const [terAtivo, setTerAtivo] = useState();
    const [terId, setTerId] = useState();

    const [quaInicio, setQuaInicio] = useState();
    const [quaFim, setQuaFim] = useState();
    const [quaAtivo, setQuaAtivo] = useState();
    const [quaId, setQuaId] = useState();

    const [quiInicio, setQuiInicio] = useState();
    const [quiFim, setQuiFim] = useState();
    const [quiAtivo, setQuiAtivo] = useState();
    const [quiId, setQuiId] = useState();

    const [sexInicio, setSexInicio] = useState();
    const [sexFim, setSexFim] = useState();
    const [sexAtivo, setSexAtivo] = useState();
    const [sexId, setSexId] = useState();
    
    const [sabInicio, setSabInicio] = useState();
    const [sabFim, setSabFim] = useState();
    const [sabAtivo, setSabAtivo] = useState();
    const [sabId, setSabId] = useState();

    const getHorario = async (params = '') => {
        setLoading(true);

        let res = await Api.getHorario(params);
        if(!res.error) {
            setDomInicio(res[0].inicio)
            setDomFim(res[0].fim)
            setDomAtivo(res[0].ativo)
            setDomId(res[0]._id)

            setSegInicio(res[1].inicio)
            setSegFim(res[1].fim)
            setSegAtivo(res[1].ativo)
            setSegId(res[1]._id)

            setTerInicio(res[2].inicio)
            setTerFim(res[2].fim)
            setTerAtivo(res[2].ativo)
            setTerId(res[2]._id)

            setQuaInicio(res[3].inicio)
            setQuaFim(res[3].fim)
            setQuaAtivo(res[3].ativo)
            setQuaId(res[3]._id)

            setQuiInicio(res[4].inicio)
            setQuiFim(res[4].fim)
            setQuiAtivo(res[4].ativo)
            setQuiId(res[4]._id)

            setSexInicio(res[5].inicio)
            setSexFim(res[5].fim)
            setSexAtivo(res[5].ativo)
            setSexId(res[5]._id)

            setSabInicio(res[6].inicio)
            setSabFim(res[6].fim)
            setSabAtivo(res[6].ativo)
            setSabId(res[6]._id)
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    const handleAtiva = (id, status) => {
        alert(id + " " + !status)
    }

    useEffect(()=>{
        getHorario();
    }, []);

    // const onRefresh = () => {
    //     setRefreshing(false);
    //     getUsuario();
    // }

    // const handleSearch = () => {
    //     if (search == '') {
    //         setListaFiltro(listaOriginal);
    //     } else {
    //         const listaFiltrada = listaOriginal.filter(
    //             function (item) {
    //                 const itemData = item.nome
    //                 ? item.nome.toUpperCase()
    //                 : ''.toUpperCase();
    //             const textData = search.toUpperCase();
    //             return itemData.indexOf(textData) > -1;
    //             }
    //         );
    //         setListaFiltro(listaFiltrada);
    //     }
    // }

    // const handleAdicionar = () => {
    //     navigation.navigate('UsuarioForm');
    // }

    // const handleUsuario = (usuario) => {
    //     navigation.navigate('UsuarioForm', { usuario });
    // }
    

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo='Horários' btn='menu'/>
            <ScrollView style={{width:'95%'}}>
                <View style={styles.listagem}>
                    {loading &&
                        <ActivityIndicator size="large" color="#758918" />
                    }
                    
                    {!loading && <>
                        <View style={styles.cardContainer}>
                            <View style={styles.cardContent}>
                                
                                <Text style={styles.cardHeader}> Domingo </Text>
                                <View>
                                    <Text style={styles.pikerLabel}> Hora de inicio </Text>
                                    <PikerHora
                                        value={domInicio}
                                        onChange={(v)=>setDomInicio(v)}
                                    />
                                    <Text style={styles.pikerLabel}> Hora de fim </Text>
                                    <PikerHora
                                        value={domFim}
                                        onChange={(v)=>setDomFim(v)}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardButtons}>
                                <BtnAtivo 
                                    ativo={domAtivo}
                                    onPress={() => {handleAtiva(domId, domAtivo)}}
                                />
                                <TouchableOpacity style={styles.salvarBtn}>
                                    <Text style={styles.textSalvarBtn}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.cardContainer}>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}> Segunda-feira </Text>
                                <View>
                                    <Text style={styles.pikerLabel}> Hora de inicio </Text>
                                    <PikerHora
                                        value={segInicio}
                                        onChange={(v)=>setSegInicio(v)}
                                    />
                                    <Text style={styles.pikerLabel}> Hora de fim </Text>
                                    <PikerHora
                                        value={segFim}
                                        onChange={(v)=>setSegFim(v)}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardButtons}>
                                <BtnAtivo 
                                    ativo={segAtivo}
                                    onPress={() => {handleAtiva(segId, segAtivo)}}
                                />
                                <TouchableOpacity style={styles.salvarBtn}>
                                    <Text style={styles.textSalvarBtn}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.cardContainer}>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}> Terça-feira </Text>
                                <View>
                                    <Text style={styles.pikerLabel}> Hora de inicio </Text>
                                    <PikerHora
                                        value={terInicio}
                                        onChange={(v)=>setTerInicio(v)}
                                    />
                                    <Text style={styles.pikerLabel}> Hora de fim </Text>
                                    <PikerHora
                                        value={terFim}
                                        onChange={(v)=>setTerFim(v)}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardButtons}>
                                <BtnAtivo 
                                    ativo={terAtivo}
                                    onPress={() => {handleAtiva(terId, terAtivo)}}
                                />
                                <TouchableOpacity style={styles.salvarBtn}>
                                    <Text style={styles.textSalvarBtn}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.cardContainer}>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}> Quarta-feira </Text>
                                <View>
                                    <Text style={styles.pikerLabel}> Hora de inicio </Text>
                                    <PikerHora
                                        value={quaInicio}
                                        onChange={(v)=>setQuaInicio(v)}
                                    />
                                    <Text style={styles.pikerLabel}> Hora de fim </Text>
                                    <PikerHora
                                        value={quaFim}
                                        onChange={(v)=>setQuaFim(v)}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardButtons}>
                                <BtnAtivo 
                                    ativo={quaAtivo}
                                    onPress={() => {handleAtiva(quaId, quaAtivo)}}
                                />
                                <TouchableOpacity style={styles.salvarBtn}>
                                    <Text style={styles.textSalvarBtn}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.cardContainer}>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}> Quinta-feira </Text>
                                <View>
                                    <Text style={styles.pikerLabel}> Hora de inicio </Text>
                                    <PikerHora
                                        value={quiInicio}
                                        onChange={(v)=>setQuiInicio(v)}
                                    />
                                    <Text style={styles.pikerLabel}> Hora de fim </Text>
                                    <PikerHora
                                        value={quiFim}
                                        onChange={(v)=>setQuiFim(v)}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardButtons}>
                                <BtnAtivo 
                                    ativo={quiAtivo}
                                    onPress={() => {handleAtiva(quiId, quiAtivo)}}
                                />
                                <TouchableOpacity style={styles.salvarBtn}>
                                    <Text style={styles.textSalvarBtn}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.cardContainer}>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}> Sexta-feira </Text>
                                <View>
                                    <Text style={styles.pikerLabel}> Hora de inicio </Text>
                                    <PikerHora
                                        value={sexInicio}
                                        onChange={(v)=>setSexInicio(v)}
                                    />
                                    <Text style={styles.pikerLabel}> Hora de fim </Text>
                                    <PikerHora
                                        value={sexFim}
                                        onChange={(v)=>setSexFim(v)}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardButtons}>
                                <BtnAtivo 
                                    ativo={sexAtivo}
                                    onPress={() => {handleAtiva(sexId, sexAtivo)}}
                                />
                                <TouchableOpacity style={styles.salvarBtn}>
                                    <Text style={styles.textSalvarBtn}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.cardContainer}>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}> Sábado </Text>
                                <View>
                                    <Text style={styles.pikerLabel}> Hora de inicio </Text>
                                    <PikerHora
                                        value={sabInicio}
                                        onChange={(v)=>setSabInicio(v)}
                                    />
                                    <Text style={styles.pikerLabel}> Hora de fim </Text>
                                    <PikerHora
                                        value={sabFim}
                                        onChange={(v)=>setSabFim(v)}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardButtons}>
                                <BtnAtivo 
                                    ativo={sabAtivo}
                                    onPress={() => {handleAtiva(sabId, sabAtivo)}}
                                />
                                <TouchableOpacity style={styles.salvarBtn}>
                                    <Text style={styles.textSalvarBtn}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>}

                </View>
            </ScrollView>    
        </SafeAreaView>
    )
}