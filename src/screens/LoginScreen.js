import {
  Box,
  Text,
  Image,
  Heading,
  Input,
  VStack,
  Pressable,
  Icon,
  KeyboardAvoidingView,
  Button,
  HStack,
  Link,
} from "native-base";
import { useState } from "react";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const logo = require("../assets/logo.png");

export default function LoginScreen() {
  const [show, setShow] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={"position"}
      keyboardVerticalOffset={20}
    >
      <Box
        safeArea
        width={width}
        height={"auto"}
        px={6}
      >
        <Image
          source={logo}
          alt="logo"
          width={"139px"}
          height={"145px"}
          alignSelf="center"
          mt={7}
          mb={2}
        />
        <Box>
          <Heading
            fontSize={"35px"}
            color="#07013E"
            alignSelf={"center"}
          >
            Login
          </Heading>
          <VStack
            mt={7}
            space={5}
          >
            <Input
              size={"2xl"}
              py={4}
              type={"text"}
              placeholder={"Digite seu email"}
              fontSize={"14px"}
            />
            <Input
              size={"2xl"}
              py={4}
              fontSize={"14px"}
              type={show ? "text" : "password"}
              placeholder="Digite sua senha"
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <Feather
                        name={show ? "eye" : "eye-off"}
                        size={20}
                        color="#50525B"
                        style={{ padding: 3, marginRight: 10 }}
                      />
                    }
                  />
                </Pressable>
              }
            />
            <Text
              alignSelf={"flex-end"}
              color={"#07395A"}
              fontWeight={"700"}
            >
              Esqueceu a senha?
            </Text>
            <Button
              py={3}
              backgroundColor={"#07395A"}
            >
              <Text
                color={"white"}
                fontSize={"16px"}
                fontWeight={"700"}
              >
                Entrar
              </Text>
            </Button>

            <Text
              alignSelf={"center"}
              color={"#50525B"}
              fontSize={"14px"}
              fontWeight={"700"}
            >
              ou continue com
            </Text>

            <HStack
              alignSelf={"center"}
              space={7}
              mt={-5}
            >
              <Button backgroundColor={"transparent"}>
                <Image
                  source={require("../assets/googleicon.png")}
                  width={"45px"}
                  height={"45px"}
                  alt="Google"
                />
              </Button>

              <Button backgroundColor={"transparent"}>
                <Image
                  source={require("../assets/fbicon.png")}
                  width={"45px"}
                  height={"45px"}
                  alt="Facebook"
                />
              </Button>
            </HStack>
            <Text alignSelf={"center"}>
              Não tem uma conta?{" "}
              <Link
                isUnderlined={false}
                _text={{ color: "#07395A", fontWeight: "700" }}
              >
                Cadastre-se
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
}
