import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import appStyle from './App.style';
import Header from './Components/Header/Header.jsx';

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={appStyle.container}>
                <View style={appStyle.header}>
                    <Header />
                </View>
                <View style={appStyle.body}>
                    <Text>Body</Text>
                </View>
                <View style={appStyle.footer}>
                    <Text>Footer</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}


