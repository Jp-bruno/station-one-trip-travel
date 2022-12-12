import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/Login";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import User from "../screens/User";
const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return (
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="Home"
          component={Home}
        />

        <Screen
          name="User"
          component={User}
        />
      </Navigator>
    );
  }

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Login"
        component={Login}
        options={{ tabBarStyle: { height: 0 } }}
      />
    </Navigator>
  );
}
