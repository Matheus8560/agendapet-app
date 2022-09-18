import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2e3045",        
    },
    
    content: {
        display: "flex",
        backgroundColor: "#fafdea",
        width: "80%",
        padding: 25,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },

    loginButton: {
        backgroundColor: "#758918",
        height: 50,
        width: "100%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },

    loginText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18
    },

    recoveryButton: {
        marginTop: 30,
        marginTop: 20,
    },
    
    input: {
        backgroundColor: "#FFF",
        height: 50,
        width: "100%",
        paddingHorizontal: 20,
        marginBottom: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#4f4d4d"
    }
})