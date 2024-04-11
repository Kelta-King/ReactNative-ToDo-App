import { StyleSheet } from "react-native";

export default s = StyleSheet.create({
    container: {
        marginHorizontal: 6,
        height: 70,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 4,
    },
    text: {
        fontSize: 18,
    },
    check: {
        height: 26,
        width: 25,
    }
});