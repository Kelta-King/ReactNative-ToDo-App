import { Image, Text, View } from "react-native";
import logoImg from "../../assets/logo.png";
import headerStyle from "./Header.style";
export default function Header() {
    return (
        <>
            <Image source={logoImg} style={headerStyle.logo} />
            <Text style={headerStyle.title} >You must needdt to do something</Text>
        </>
    );
}