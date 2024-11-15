import { FontAwesome6 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

async function set(number) {
  let response = await fetch(
    "http://192.168.8.123:8080/Deshan_IOT/SetData?number=" + number
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <View style={styles.view2}></View>
          <View style={styles.view2}>
            <Pressable
              style={styles.button1}
              onPress={() => {
                set(3);
              }}
            >
              <FontAwesome6 name={"arrow-left"} color={"white"} size={37} />
            </Pressable>
          </View>
          <View style={styles.view2}></View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view2}>
            <Pressable
              style={styles.button1}
              onPress={() => {
                set(1);
              }}
            >
              <FontAwesome6 name={"arrow-up"} color={"white"} size={37} />
            </Pressable>
          </View>
          <View style={styles.view2}></View>
          <View style={styles.view2}>
            <Pressable
              style={styles.button1}
              onPress={() => {
                set(2);
              }}
            >
              <FontAwesome6 name={"arrow-down"} color={"white"} size={37} />
            </Pressable>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view2}></View>
          <View style={styles.view2}>
            <Pressable
              style={styles.button1}
              onPress={() => {
                set(4);
              }}
            >
              <FontAwesome6 name={"arrow-right"} color={"white"} size={37} />
            </Pressable>
          </View>
          <View style={styles.view2}></View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    height: 350,
    width: 350,
    flexDirection: "row",
  },
  view2: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    padding: 10,
    backgroundColor: "black",
    borderRadius: 8,
  },
});
