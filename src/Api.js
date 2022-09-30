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
        
    recovery: async (email) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({email: email})

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        const req = await fetch(`${BASE_API}/recovery`, requestOptions);
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

    createServico: async(body) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "titulo": body.titulo,
            "descricao": body.descricao,
            "valor": body.valor,
            "duracao": body.duracao
        })

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const req = await fetch(`${BASE_API}/servico`, requestOptions)
        const json = await req.json()
        return json;
    },

    updateServico: async(body, id) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "titulo": body.titulo,
            "descricao": body.descricao,
            "valor": body.valor,
            "duracao": body.duracao
        })

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const req = await fetch(`${BASE_API}/servico/${id}`, requestOptions)
        const json = await req.json()
        return json;
    },

    deleteServicos: async(id) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        const req = await fetch(`${BASE_API}/servico/${id}`, requestOptions)
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
    
    updateHorario: async(body, id) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "inicio": body.inicio,
            "fim": body.fim,
            "ativo": body.ativo
        })

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const req = await fetch(`${BASE_API}/horario/${id}`, requestOptions)
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

    createUsuario: async(body) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "nome": body.nome,
            "email": body.email,
            "telefone": body.telefone,
        })

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const req = await fetch(`${BASE_API}/usuario`, requestOptions)
        const json = await req.json()
        return json;
    },

    updateUsuario: async(body, id) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(body)
        
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const req = await fetch(`${BASE_API}/usuario/${id}`, requestOptions)
        const json = await req.json()
        return json;
    },

    deleteUsuario: async(id) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        const req = await fetch(`${BASE_API}/usuario/${id}`, requestOptions)
        const json = await req.json()
        return json;
    },

    getDisponibilidade: async(params) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        const req = await fetch(`${BASE_API}/horarios-disponiveis${params}`, requestOptions)
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
    createAgendamento: async(body) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const req = await fetch(`${BASE_API}/agendamento`, requestOptions)
        const json = await req.json()
        return json;
    },
    deleteAgendamento: async(id) => {
        const token = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        const req = await fetch(`${BASE_API}/agendamento/${id}`, requestOptions)
        const json = await req.json()
        return json;
    },
}