import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./screen/Home";
import FlashMessage from "./components/FlashMessage";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home />
        <FlashMessage />
      </SafeAreaView>
    </Provider>
  );
}
