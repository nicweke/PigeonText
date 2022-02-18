import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.warn("Sending: ", message);
    setMessage("");
  };
  const onPlusClicked = () => {
    console.warn("Plus button clicked");
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'android' ? 'height' : 'padding'}
     style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={22}
          color="#03256C"
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          selectionColor={"black"}
          value={message}
          onChangeText={(newMessage) => setMessage(newMessage)} // onChangeText={setMessage}
          placeholder="Write message..."
        />
        {/* <FontAwesome5 name="dove" size={24} color="black" /> */}
        <AntDesign
          name="camerao"
          size={22}
          color="#03256C"
          style={{ marginHorizontal: 10 }}
        />
        <Foundation
          name="microphone"
          size={22}
          color="#03256C"
          style={styles.icon}
        />
      </View>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text>
          {message ? (
            <FontAwesome5
              name="dove"
              size={24}
              color="black"
              style={styles.buttonText}
            />
          ) : (
            <Entypo
              name="plus"
              size={24}
              color="black"
              style={styles.buttonText}
            />
          )}
        </Text>
        {/* <FontAwesome5 name="dove" size={24} color="black" style={styles.buttonText} />  */}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;
