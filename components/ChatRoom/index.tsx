import React from "react";
import { Image, Text, View,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Navigation from './../../navigation/index';

type Props = {};

export default function ChatRoomItem({ chatRoom }) {
  const user = chatRoom.users[1];

const navigation = useNavigation();

  const onPress = ()=>{
    navigation.navigate('Messages', {id:chatRoom.id});
  }
  return (
    <Pressable onPress={onPress}style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      {chatRoom.newMessage ? <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{chatRoom.newMessage}</Text>
      </View> : null}
      </View>
    </Pressable>
  );
}
