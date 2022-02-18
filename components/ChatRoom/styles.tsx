import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 22,
      alignItems: "center",
 
    },
    image: {
      height: 66,
      width: 66,
      borderRadius: 22,
      marginRight: 15,
      borderColor: 'white',
    },
    name: {
      fontWeight: "bold",
      fontSize: 18,
    },
    text: {
      color: "#5A5A66",
      fontSize: 15,
      //fontWeight:'300',
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 2,
    },
    rightContainer: {
      flex: 1,
    },
    badgeContainer:{
      backgroundColor: '#2667ff',
      height:20,
      width:20,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 9,
      position:'absolute',
      bottom:45,
      left: 250,
      marginBottom: 4,
      borderWidth: 1,
      borderColor:'white',
  
      
  
    },
    badgeText:{
      color: '#fcfffd',
      fontSize: 13,
      fontWeight:'bold',
  
    },
    page:
    {
  
    },
  });
  

  export default styles;