import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import FlashMessage from "../components/FlashMessage";
import { useDispatch } from "react-redux";
import { showFlashMessage } from "../redux/flashMessageSlice";

const Home = () => {
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const showToast = () => {
    setType("success");
    setText("Lorem Ipsum");
    dispatch(showFlashMessage());
  };

  return (
    <SafeAreaView>
      <FlashMessage
        type={type || undefined}
        text={text || undefined}
        autoClose={true}
      />

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
