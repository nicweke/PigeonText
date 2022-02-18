import React from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import Messages from "../components/Messages";
import chatRoomData from "../assets/dummy/Chats";
import MessageInput from "../components/MessageInput";


export default function MessageScreen() {
  const route = useRoute();
  console.warn('Displaying Chatroom: ', route.params?.id)
  return (
    <SafeAreaView style={styles.page}>
      <FlatList 
      data={chatRoomData.messages}
      renderItem={({item})=> <Messages message={item}/>}
      
      />
      
      <MessageInput />

      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  page:{
    //backgroundColor: "#fcfffd",
    backgroundColor: "#fff",
    flex: 1,

  },
})
