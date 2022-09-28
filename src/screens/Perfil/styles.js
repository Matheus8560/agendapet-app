import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fafdea",        
    },
    
    content: {
        display: "flex",
        width: "100%",
        height: "100%",
        marginTop: 20,
        marginBottom: 80
    },

    form: {
        display: "flex",
        alignItems: "center",
        width: "100%",
    },

    titulo:{
        fontSize:18,
        color: '#758918',
        fontWeight: "600",
    },
    
    input: {
        backgroundColor: "#FFF",
        height: 50,
        width: "90%",
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#758918"
    },

    btncontainer: {
        display: "flex",
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'absolute',
        bottom: 10,
        marginTop: 20,
        marginBottom: 10
    }

})