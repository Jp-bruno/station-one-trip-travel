import { Text, HStack, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { ImageBackground } from "react-native";
import { useState } from "react";
import { useEffect } from "react";

import MapView from "react-native-maps";
import * as Location from "expo-location";

export default function Home() {
  const { handleLogoff } = useContext(AuthContext);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  return (
    <ImageBackground style={{ backgroundColor: "#262944", height: "100%" }}>
      <SafeAreaView>
        <HStack>
          <Text>Olá, João</Text>

          <Button>
            <Text onPress={handleLogoff}>Sair</Text>
          </Button>
        </HStack>

        <MapView
          style={{ width: "100%", height: "100%" }}
          showsUserLocation
          followsUserLocation
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
