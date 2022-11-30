import { NativeBaseProvider } from "native-base";
import AuthContextProvider from "./src/contexts/AuthContext";
import Routes from './src/routes/index';

export default function App() {

  return (
    <AuthContextProvider>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </AuthContextProvider>
  );
}
