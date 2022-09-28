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
        marginVertical: 5
    },

    cardContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 5,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: "#758918",
        borderWidth: 1,
        backgroundColor: "#FFF"
    },

    cardContent:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "65%",
    },

    cardButtons:{
        flexDirection: "column",
        width: "25%",
        justifyContent: "space-between",
        alignItems:"flex-end",
    },

    cardHeader: {
        fontSize: 20,
        fontWeight: "500",
        color: "#758918"
    },

    pikerLabel:{
        marginTop: 10
    },

    salvarBtn: {
        backgroundColor: "#758918",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },

    textSalvarBtn: {
        color: "#FFF",
        fontWeight: "bold",
        lineHeight: 16,
        fontSize: 14
    },
})