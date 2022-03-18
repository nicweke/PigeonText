import * as React from "react";
import { View, StyleSheet, Image, Text, FlatList, Pressable } from "react-native";
import {Auth} from 'aws-amplify';
//import ChatRoomItem from "../components/ChatRoom";
import chatRoomsData from "../assets/dummy/ChatRooms";
import ChatRoomItem from "../components/ChatRoom/index";

export default function TabOneScreen() {

  const logout = ()=>{
    Auth.signOut()
  }
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        //showsVerticalScrollIndicator={true}
        // ListHeaderComponent={() => (
        //   <Text
        //     style={{
        //       fontSize: 28,
        //       textAlign: "center",
        //       fontWeight: 'bold',
        //       color: '#191102',
        //       paddingTop: 7,
        //       paddingBottom: 5,
        //     }}
        //   >
        //     Recent Chat
        //   </Text>
        // )}
      />
      {/* <Pressable onPress={logout} style={{backgroundColor:'red', height:50, margin:15, borderRadius:10, alignItems:'center',justifyContent:'center' }}>
        <Text style={{color: 'white', fontSize:20, fontWeight:'bold'}}>Logout</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fcfffd",
    flex: 1,
  },
});
