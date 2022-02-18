import * as React from "react";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";
//import ChatRoomItem from "../components/ChatRoom";
import chatRoomsData from "../assets/dummy/ChatRooms";
import ChatRoomItem from "../components/ChatRoom/index";

export default function TabOneScreen() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fcfffd",
    flex: 1,
  },
});
