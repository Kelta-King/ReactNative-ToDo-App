import { StyleSheet } from "react-native";

export default appStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 8
    },
    header: {
        flex: 4,
    },
    body: {
        flex: 20,
        marginTop: 20,
    },
    footer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    addTodoButton: {
        position: "absolute",
        bottom: 76,
        right: 18,
        backgroundColor: "black",
        paddingHorizontal: 28,
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
    },
    addTodoButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    }
});