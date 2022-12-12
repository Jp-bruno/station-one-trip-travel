import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Routes from "./src/routes";
import AuthContextProvider from "./src/context/authContext";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
