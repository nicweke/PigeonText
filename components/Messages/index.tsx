import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const yellow = "#FDFFFC";
const green = "#2541B2";
const myID = "u1";

const Messages = ({message}) => {
  const isMe = message.user.id == myID;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? yellow : green,
          marginLeft: isMe ? "auto" : 10,
          marginRight: isMe ? 10 : 'auto',
          borderWidth: isMe ? 2 : 0,
          borderColor: isMe ? '#6c757d' : 'white',
        },
      ]}
    >
      <Text style={[styles.text, {color: isMe ? 'black' : 'white', }, ]}>{message.content}</Text>
    </View>
  );
};

export default Messages;
