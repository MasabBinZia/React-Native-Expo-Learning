import { StatusBar } from "expo-status-bar";
import { Button, Alert, Image, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import Icon from "./assets/icon.png"


export default function App() {

  const handlePress = () => {
    Alert.alert("Title", "Hello", [
      { text: 'Yes', onPress: () => (console.log("YES")) },
      { text: 'No', onPress: () => (console.log("No")) },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} style={styles.text}>Masab Bin Zia! </Text>
      <Image source={Icon} style={styles.img} />
      <Text numberOfLines={1} onPress={handlePress} style={styles.text}>Masab Bin Zia! </Text>

      <TouchableHighlight onPress={handlePress}>
        <Image fadeDuration={1000} source={{ uri: "https://picsum.photos/200/300", width: 200, height: 300 }} />
      </TouchableHighlight>

      <TouchableNativeFeedback onPress={handlePress}>
        <View style={{ width: 200, height: 70, backgroundColor: 'red' }}></View>
      </TouchableNativeFeedback>

      <Button color={'red'} title="Click Me" onPress={handlePress} />
      <Button color={'black'} title="BTN" onPress={Alert.prompt("What is Your Name?", "My Name is", text => console.log(text))} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
  img: {
    width: 100
    , height: 100
  }
});
