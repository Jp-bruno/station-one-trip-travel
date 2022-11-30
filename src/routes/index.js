import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import InitialScreen from "../screens/InitialScreen";


export default function Routes() {
    const {isAuth} = useContext(AuthContext);
    
    return(
        <NavigationContainer>
            {isAuth ? <AppRoutes /> : <InitialScreen />}
        </NavigationContainer>
    )
}