import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaskInput, { Masks } from 'react-native-mask-input';
import styles from "./styles";
import Header from "../../../components/Header";
import { formatarMoeda } from "../../../utils";

export default ({route, navigation}) => {

    const [servicoId, setServicoId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const [duracao, setDuração] = useState('')

    useEffect(()=>{
        if (route.params) {
            setServicoId(route.params.servico._id);
            setTitulo(route.params.servico.titulo);
            setDescricao(route.params.servico.descricao);
            setValor(formatarMoeda(route.params.servico.valor));
            setDuração(route.params.servico.duracao);
        }
    },[])

    return (
        <SafeAreaView style={styles.container}>
            {servicoId != '' ? <Header titulo='Editar Serviço'/> : <Header titulo='Cadastrar Serviço'/>}
            <ScrollView style={styles.content} behavior='position' enabled>
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
                    value={valor}
                    onChangeText={v=>{
                        setValor(v)
                        console.log(Masks.BRL_CURRENCY);
                    }}
                    mask={Masks.BRL_CURRENCY}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

// import React, { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { ActivityIndicator, Modal, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

// import Api from "../../Api";

// import ServicoItem from "../../components/ServicoItem";
// import BtnAdicionar from "../../components/BtnAdicionar";
// import { formatarMoeda } from "../../utils";

// import styles from "./styles";

// export default () => {
//     const navigation = useNavigation();

//     const [search, setSearch] = useState('');
//     const [loading, setLoading] = useState(true);
//     const [listaOriginal, setListaOriginal] = useState([]);
//     const [listaFiltro, setListaFiltro] = useState([]);
//     const [refreshing, setRefreshing] = useState(false);

//     const getServicos = async (params = '') => {
//         setLoading(true);
//         setListaOriginal([]);

//         let res = await Api.getServicos(params);
//         if(!res.error) {
//             setListaOriginal(res);
//             setListaFiltro(res);
//         } else {
//             alert("Erro: "+res.error);
//         }

//         setLoading(false);
//     }

//     useEffect(()=>{
//         getServicos();
//     }, []);

//     const onRefresh = () => {
//         setRefreshing(false);
//         getServicos();
//     }

//     const handleSearch = () => {
//         if (search == '') {
//             setListaFiltro(listaOriginal);
//         } else {
//             const listaFiltrada = listaOriginal.filter(
//                 function (item) {
//                     const itemData = item.titulo
//                     ? item.titulo.toUpperCase()
//                     : ''.toUpperCase();
//                 const textData = search.toUpperCase();
//                 return itemData.indexOf(textData) > -1;
//                 }
//             );
//             setListaFiltro(listaFiltrada);
//         }
//     }

//     const handleAdicionar = () => {
//         alert('agora deu ruim kkk')
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <TextInput 
//                 style={styles.inputSearch} 
//                 placeholder="Buscar serviço pelo nome"
//                 value={search}
//                 onChangeText={t=>setSearch(t)}
//                 onEndEditing={handleSearch}
//             />
//             <ScrollView style={{width:'95%'}}>
//                 <View style={styles.listagem} refreshControl={
//                     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//                 }>
//                     {loading &&
//                         <ActivityIndicator size="large" color="#758918" />
//                     }
                    
//                     {!loading &&
//                         listaFiltro.map((item, k)=>(
//                             <ServicoItem 
//                                 key={k} 
//                                 id={item._id}
//                                 nome={item.titulo}
//                                 valor={formatarMoeda(item.valor)}
//                                 duracao={item.duracao}
//                             />
//                         ))
//                     }

//                 </View>
//             </ScrollView>          
//             <BtnAdicionar onPress={handleAdicionar} /> 
//         </SafeAreaView>
//     )
// }
