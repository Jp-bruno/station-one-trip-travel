import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, NativeBaseProvider, Button } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { useEffect, useState, useRef } from "react";
import { Dimensions } from "react-native";
import StartScreenContent from "./components/StartScreenContent";

const { height, width } = Dimensions.get("window");

export default function App() {
  const data = [
    {
      key: "1",
      heading: "Boas vindas!",
      text: "O mundo está cheio de maravilhas para descobrir",
      img: require("./assets/inicio-tela-1.png"),
    },
    {
      key: "2",
      heading: "Experiências \n únicas",
      text: "O melhor aplicativo para experiências de viagem",
      img: require("./assets/inicio-tela-2.png"),
    },
    {
      key: "3",
      heading: "É fácil de \n encontrar",
      text: "O mundo na palma da sua mão",
      img: require("./assets/inicio-tela-3.png"),
    },
  ];

  const [section, setSection] = useState(0);

  const renderItem = (img, index) => {
    return <ImageBackground key={index} style={styles.background} resizeMode="cover" source={img} />;
  };

  const listRef = useRef(null)

  useEffect(() => {
    listRef.current.scrollTo({x: width * section, animated: true})
  }, [section]);

  return (
    <NativeBaseProvider>
      <StatusBar />

      <ScrollView showsHorizontalScrollIndicator={false} horizontal ref={listRef}>
        {data.map((item, index) => renderItem(item.img, index))}
      </ScrollView>

      <StartScreenContent data={data} section={section} setSection={setSection} />

    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    height: height,
    width: width,
    flex: 1,
  },
});
