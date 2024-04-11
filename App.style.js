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
    }
});