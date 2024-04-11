import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appStyle from './App.style';
import Header from './Components/Header/Header.jsx';
import Card from './Components/Card/Card.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { useState, useRef, useEffect } from 'react';
import DialogInput from 'react-native-dialog-input';

export default function App() {
    const [todoList, setTodoList] = useState([
        // { id: 1, text: "Complete homework", isComplete: true },
        // { id: 2, text: "Walk dog", isComplete: false },
        // { id: 3, text: "Yoga", isComplete: false },
        // { id: 4, text: "Watch TBBT", isComplete: false },
        // { id: 5, text: "Recharge OTT", isComplete: false },
        // { id: 6, text: "Pay rent", isComplete: false },
        // { id: 7, text: "Code a ToDo List", isComplete: false },
        // { id: 8, text: "Make website", isComplete: false },
        // { id: 9, text: "Clean room", isComplete: false },
        // { id: 10, text: "Learn Guitar", isComplete: false },
        // { id: 11, text: "Learn AI", isComplete: false },
        // { id: 12, text: "Learn prompt engineering", isComplete: false },
        // { id: 13, text: "Watch Hanuman", isComplete: false },
        // { id: 14, text: "Take rest", isComplete: false },
    ]);
    const [selectedTab, setSelectedTab] = useState("all");
    const [addTodoDialogueView, setAddTodoDialogueView] = useState(false);
    const scrollViewRef = useRef();
    var id = todoList.length + 1;

    const storeData = async () => {
        try {
            await AsyncStorage.setItem(
                '@2DoList:todo_list',
                JSON.stringify(todoList),
            );
            console.log("Saved");
        } catch (error) {
            console.log(error);
        }
    };

    const retrieveData = async (callback) => {
        try {
            const value = await AsyncStorage.getItem('@2DoList:todo_list');
            if (value !== null) {
                callback(JSON.parse(value));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        retrieveData((todoList) => {
            setTodoList(todoList);
        });
    }, []);

    useEffect(() => {
        storeData();
    }, [todoList]);


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

    function loadTodoList() {
        return todoList.map((todo) => {
            if (selectedTab === "inProgress") {
                if (todo.isComplete === false) {
                    return <Card key={todo.id} todo={todo} onPress={updateTodoList} onLongPress={confirmDelete} />
                }
            }
            else if (selectedTab === "done") {
                if (todo.isComplete === true) {
                    return <Card key={todo.id} todo={todo} onPress={updateTodoList} onLongPress={confirmDelete} />
                }
            }
            else {
                return <Card key={todo.id} todo={todo} onPress={updateTodoList} onLongPress={confirmDelete} />
            }
        });
    }

    function addTodo(task) {
        if (task != undefined && task.trim().length > 0) {
            setTodoList([...todoList, { id: id++, text: task, isComplete: false }]);
            setTimeout(() => {
                scrollViewRef.current.scrollToEnd({ animated: true });
            }, 300);
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={appStyle.container}>
                <View style={appStyle.header}>
                    <Header />
                </View>
                <View style={appStyle.body}>
                    <ScrollView ref={scrollViewRef}>
                        {loadTodoList()}
                    </ScrollView>
                </View>
                <View style={appStyle.footer}>
                    <Footer
                        todoList={todoList}
                        selectedTab={selectedTab}
                        onPress={setSelectedTab}
                    />
                </View>
                <TouchableOpacity
                    style={appStyle.addTodoButton}
                    onPress={() => setAddTodoDialogueView(!addTodoDialogueView)}
                >
                    <Text style={appStyle.addTodoButtonText} >+ Add Todo</Text>
                </TouchableOpacity>
                <DialogInput isDialogVisible={addTodoDialogueView}
                    title={"Add Todo"}
                    message={"Write task to make a Todo"}
                    placeholder={"Ex: Walk dog..."}
                    submitInput={(inputText) => {
                        addTodo(inputText);
                        setAddTodoDialogueView(false);
                    }}
                    closeDialog={() => { setAddTodoDialogueView(false) }}>
                </DialogInput>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}


