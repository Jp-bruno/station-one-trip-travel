import { Box, Text, Button, VStack, Heading } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default function StartScreenContent({ data, section, setSection }) {
  return (
    <Box position="absolute" width="100%" height={"50%"} bottom="0" justifyItems="end">
      <LinearGradient colors={["transparent", "rgba(1, 60, 105, 0.90)"]} style={{ height: "100%" }} locations={[0, 0.8]}>
        <Box position="absolute" bottom="0" width="100%">
          <Heading color="white" fontSize="35px" fontWeight="bold" textAlign="center" lineHeight={0}>{`${data[section].heading}`}</Heading>
          <Text color="white" fontWeight="500" textAlign="center" alignSelf={"center"} width={'80%'} mb={4}>{`${data[section].text}`}</Text>

          <Button
            backgroundColor="#FAFF00"
            height="48px"
            borderRadius="8px"
            width="90%"
            alignSelf="center"
            mb={10}
            _pressed={{ backgroundColor: "red.100" }}
            onPress={() => setSection((value) => (value === 2 ? 0 : value + 1))}
          >
            <Text>{section === 2 ? "Começar" : "Continuar"}</Text>
          </Button>
        </Box>
      </LinearGradient>
    </Box>
  );
}
