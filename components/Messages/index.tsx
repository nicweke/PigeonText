import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const green = "#1ADC00";
const grey = "#dee2e6";
const myID = "u1";

const Messages = ({message}) => {
  const isMe = message.user.id == myID;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? green : grey,
          marginLeft: isMe ? "auto" : 10,
          marginRight: isMe ? 10 : 'auto',
          borderWidth: isMe ? 0 : 0,
          borderColor: isMe ? '#6c757d' : 'white',
          borderBottomRightRadius: isMe ? 0 : 18,
          borderTopLeftRadius: isMe ? 18 : 0,
          
        },
      ]}
    >
      <Text style={[styles.text, {color: isMe ? 'white' : 'black', }, ]}>{message.content}</Text>
    </View>
  );
};

export default Messages;
