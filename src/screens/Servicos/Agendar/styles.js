import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fafdea",
    },
    
    listagem: {
        display: "flex",
    },

    inputSearch: {
        backgroundColor: "#FFF",
        height: 50,
        width: "95%",
        paddingHorizontal: 20,
        marginVertical: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#758918"
    },
    cardContainer: {
        display: "flex",
        width: "100%",
        marginTop: 5,
        paddingTop: 15,
        borderRadius: 10,
        borderColor: "#758918",
        borderWidth: 1,
        backgroundColor: "#FFF"
    },
    servicoInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 15
    },
    data: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#758918'
    },
    escolhaText: {
        fontSize: 20,
        color: '#758918'
    },

    horaItem:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderTopColor: "#758918",
        borderTopWidth: 1
    },

    horaItemText: {
        fontSize: 20,
        color: '#758918'
    }
})