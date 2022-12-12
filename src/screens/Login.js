import {
  VStack,
  FormControl,
  Input,
  KeyboardAvoidingView,
  Image,
  Box,
  Button,
  Text,
} from "native-base";
import { useState, useContext } from "react";
import { ImageBackground } from "react-native";
import { AuthContext } from "../context/authContext";
import { Platform } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Linking } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardOpen, setKeyboardOpen] = useState("");

  const { handleLogin } = useContext(AuthContext);

  return (
    <ImageBackground style={{ backgroundColor: "#262944", height: "100%" }}>
      <SafeAreaView>
        <Box>
          <Image
            source={require("../assets/cclogo.png")}
            alt="logo"
            resizeMode="contain"
            width={"70%"}
            alignSelf="center"
            height={"30%"}
            mt={10}
            opacity={keyboardOpen ? 0 : 1}
          />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "position" : "height"}
            keyboardVerticalOffset={100}
          >
            <FormControl
              isRequired
              width={"90%"}
              alignSelf={"center"}
            >
              <VStack>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  type="text"
                  mb={2}
                  size={"xl"}
                  borderColor={"#4F4E72"}
                  onChangeText={(text) => setEmail(text)}
                  onFocus={() => setKeyboardOpen(true)}
                  onBlur={() => setKeyboardOpen(false)}
                />
                <FormControl.Label>Senha</FormControl.Label>
                <Input
                  type="password"
                  size={"xl"}
                  borderColor={"#4F4E72"}
                  onChangeText={(text) => setPassword(text)}
                  onFocus={() => setKeyboardOpen(true)}
                  onBlur={() => setKeyboardOpen(false)}
                />

                <Text
                  onPress={() => Linking.openURL("https://reactnative.dev")}
                  color={"#EBEBEBa9"}
                  mt={15}
                  alignSelf={"flex-end"}
                >
                  Esqueci minha senha
                </Text>
                <Button
                  mt={10}
                  py={3}
                  backgroundColor={"#90B631"}
                  onPress={() => handleLogin(email, password)}
                >
                  <Text>ENTRAR</Text>
                </Button>
              </VStack>
            </FormControl>
          </KeyboardAvoidingView>
        </Box>
      </SafeAreaView>
    </ImageBackground>
  );
}
