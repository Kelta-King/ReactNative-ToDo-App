import { Image, View, Text, TouchableOpacity } from "react-native";
import s from "./Card.style"
import check from "../../assets/check.png";

export default function Card({
    todo,
    onPress,
    onLongPress
}) {
    return (
        <TouchableOpacity style={s.container} onPress={() => { onPress(todo.id) }} onLongPress={() => onLongPress(todo.id)}>
            <Text style={[
                todo.text,
                todo.isComplete && { textDecorationLine: "line-through" }]
            }>{todo.text}</Text>
            {todo.isComplete && <Image source={check} style={s.check} />}
        </TouchableOpacity >
    );
}