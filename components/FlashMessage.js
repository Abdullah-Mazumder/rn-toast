import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { hideFlashMessage } from "../redux/flashMessageSlice";

const FlashMessage = ({
  type = "success",
  text = "Hello World",
  autoClose,
}) => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const { isVisible } = useSelector((state) => state.flashMessage);

  //message types and colors
  const messageData = {
    success: { icon: "check", colors: ["#4EC33D", "#0C7040"] },
    warning: { icon: "exclamation", colors: ["#F9943B", "#FC8621"] },
    fail: { icon: "close", colors: ["#FC2E20", "#C72C41"] },
    help: { icon: "question", colors: ["#65ACF0", "#0070E0"] },
  };
  //icon background colors
  const iconBackgroundColors = {
    success: { light: "#2C7721", dark: "#004E32" },
    warning: { light: "#D05301", dark: "#C24914" },
    fail: { light: "#940000", dark: "#801336" },
    help: { light: "#2A72C3", dark: "#05478A" },
  };
  const colorShade = colorScheme === "dark" ? "dark" : "light";
  const backgroundColor =
    messageData[type].colors[colorShade === "dark" ? 1 : 0];
  const iconBackgroundColor = iconBackgroundColors[type][colorShade];
  useEffect(() => {
    if (isVisible && autoClose) {
      const timeout = setTimeout(() => {
        handleClose();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, autoClose, dispatch]);

  const handleClose = () => {
    dispatch(hideFlashMessage());
  };

  if (!isVisible) {
    return null;
  }

  return (
    <View style={[styles.messageContainer, { backgroundColor }]}>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <FontAwesome name="times" size={18} color={"white"} />
      </TouchableOpacity>
      <View
        style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}
      >
        <FontAwesome name={messageData[type].icon} size={20} color={"white"} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  messageContainer: {
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    maxWidth: "auto",
    marginTop: 60,
  },
  iconContainer: {
    position: "absolute",
    top: -17,
    left: 13,
    width: 37,
    height: 37,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 20,
    padding: 6,
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "Lato_600SemiBold",
    padding: 5,
  },
  closeButton: {
    position: "absolute",
    top: 1,
    right: 1,
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FlashMessage;
