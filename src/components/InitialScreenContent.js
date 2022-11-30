import { Box, Text, Button, Heading } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import ProgressBar from "./ProgressBar";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";


export default function InitialScreenContent({ data, section, setSection }) {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  function buttonPressHandler() {
    if (section === 2) {
      return toggleAuth()
    }

    setSection(value => value === 2 ? 0 : value + 1)
  }

  return (
    <Box position="absolute" width="100%" height={"100%"} bottom="0" justifyItems="end">
      <LinearGradient colors={["transparent", "rgba(1, 60, 105, 0.90)"]} style={{ height: "100%" }} locations={[0.3, 0.8]}>
        <Box position="absolute" bottom="-30" width="100%">
          <Heading color="white" fontSize="35px" fontWeight="bold" textAlign="center" lineHeight={0}>{`${data[section].heading}`}</Heading>
          <Text color="white" fontWeight="500" textAlign="center" alignSelf={"center"} width={"80%"} mb={4}>{`${data[section].text}`}</Text>

          <Button
            backgroundColor={isAuth ? 'red.500' : "#FAFF00"}
            height="48px"
            borderRadius="8px"
            width="90%"
            alignSelf="center"
            _pressed={{ backgroundColor: "red.100" }}
            onPress={buttonPressHandler}
          >
            <Text>{section === 2 ? "Começar" : "Continuar"}</Text>
          </Button>

          <ProgressBar section={section}/>
        </Box>
      </LinearGradient>
    </Box>
  );
}
