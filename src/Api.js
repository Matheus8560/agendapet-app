import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_API = 'http://192.168.0.106:8000';

export default {
    checkToken: async (token) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        const req = await fetch(`${BASE_API}/session/refresh`, requestOptions)
        const json = await req.json()
        return json;
    },

    login: async (email, senha) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({email, senha})

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        const req = await fetch(`${BASE_API}/session`, requestOptions);
        const json = await req.json()
        return json;
    },

    getServicos: async(params) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        const req = await fetch(`${BASE_API}/servico${params}`, requestOptions)
        const json = await req.json()
        return json;
    },

    getUsuario: async(params) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        const req = await fetch(`${BASE_API}/usuario${params}`, requestOptions)
        const json = await req.json()
        return json;
    },

    getHorario: async(params) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        const req = await fetch(`${BASE_API}/horario${params}`, requestOptions)
        const json = await req.json()
        return json;
    },

    getAgendamentos: async(params) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        const req = await fetch(`${BASE_API}/agendamento${params}`, requestOptions)
        const json = await req.json()
        return json;
    },
}