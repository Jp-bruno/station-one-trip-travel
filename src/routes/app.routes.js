import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";


const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Screen name="login" component={LoginScreen} />
    </Navigator>
  );
}
