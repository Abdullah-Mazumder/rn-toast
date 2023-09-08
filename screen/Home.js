import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FlashMessage from "../components/FlashMessage";
import { useDispatch } from "react-redux";
import { showFlashMessage } from "../redux/flashMessageSlice";

const Home = () => {
  const dispatch = useDispatch();
  const showToast = () => {
    dispatch(
      showFlashMessage({
        type: "success",
        text: "Hello World",
        message: {
          type: "success",
          text: "Hello World",
        },
        autoClose: 3000,
      })
    );
  };
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={showToast}>
        <Text>Button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 200,
    marginLeft: 60,
  },
});

export default Home;
