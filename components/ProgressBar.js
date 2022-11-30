import { HStack, Divider } from "native-base";

const Dot = ({ section, currentSection }) => {
  return <Divider width={section === currentSection ? "32px" : "12px"} height={3} borderRadius={100} backgroundColor={section === currentSection ? "yellow.500" : "white"} />;
};

export default function ProgressBar({ section }) {
  return (
    <HStack height={20} space={3} alignSelf="center" mt={4}>
      {[0, 1, 2].map((item) => {
        return <Dot section={item} key={item} currentSection={section} />;
      })}
    </HStack>
  );
}
