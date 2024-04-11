import { Text, TouchableOpacity } from "react-native";
import s from "./Footer.style";
export default function Footer({
    todoList,
    selectedTab,
    onPress
}) {
    const tabCounts = todoList.reduce(
        (acc, item) => {
            item.isComplete === true ? acc.done++ : acc.inProgress++;
            return acc;
        },
        {
            all: todoList.length,
            inProgress: 0,
            done: 0
        }
    );
    return (
        <>
            <TouchableOpacity onPress={() => onPress("all")}>
                <Text style={selectedTab === "all" && { fontWeight: "900", color: "#2F76E5" }}>All ({tabCounts.all})</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress("inProgress")}>
                <Text style={selectedTab === "inProgress" && { fontWeight: "900", color: "#2F76E5" }}>In Progress ({tabCounts.inProgress})</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress("done")}>
                <Text style={selectedTab === "done" && { fontWeight: "900", color: "#2F76E5" }}>Done ({tabCounts.done})</Text>
            </TouchableOpacity>
        </>
    );
}