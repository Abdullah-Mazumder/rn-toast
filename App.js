import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./screen/Home";
import FlashMessage from "./components/FlashMessage";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home />
        <FlashMessage type="fail" text="Hello" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
