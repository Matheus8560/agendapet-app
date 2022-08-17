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
    }
}