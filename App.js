import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Alert, ScrollView, Text, View } from 'react-native';
import appStyle from './App.style';
import Header from './Components/Header/Header.jsx';
import Card from './Components/Card/Card.jsx';
import { useState } from 'react';

export default function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, text: "Complete homework", isComplete: true },
        { id: 2, text: "Walk dog", isComplete: false },
        { id: 3, text: "Yoga", isComplete: false },
        { id: 4, text: "Watch TBBT", isComplete: false },
        { id: 5, text: "Recharge OTT", isComplete: false },
        { id: 6, text: "Pay rent", isComplete: false },
        { id: 7, text: "Code a ToDo List", isComplete: false },
        { id: 8, text: "Make website", isComplete: false },
        { id: 9, text: "Clean room", isComplete: false },
        { id: 10, text: "Learn Guitar", isComplete: false },
        { id: 11, text: "Learn AI", isComplete: false },
        { id: 12, text: "Learn prompt engineering", isComplete: false },
        { id: 13, text: "Watch Hanuman", isComplete: false },
        { id: 14, text: "Take rest", isComplete: false },
    ]);

    function updateTodoList(id) {
        setTodoList(todoList.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        }));
    }

    function deleteTodo(id) {
        setTodoList(todoList.filter((todo) => {
            return todo.id !== id;
        }));
    }

    function confirmDelete(id) {
        Alert.alert("Delete Todo", "Are you sure you want to delete?", [
            { text: "Cancel", style: "cancel" },
            { text: "Delete", onPress: () => deleteTodo(id), style: "destructive" },
        ]);
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={appStyle.container}>
                <View style={appStyle.header}>
                    <Header />
                </View>
                <View style={appStyle.body}>
                    <ScrollView>
                        {todoList.map((todo) => {
                            return <Card key={todo.id} todo={todo} onPress={updateTodoList} onLongPress={confirmDelete} />
                        })}
                    </ScrollView>
                </View>
                <View style={appStyle.footer}>
                    <Text>Footer</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}


