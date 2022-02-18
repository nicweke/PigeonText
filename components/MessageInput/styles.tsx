import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{

        flexDirection:'row',
        padding:12,
    },
    inputContainer:{

        backgroundColor:'#fff',
        flex:1,
        marginRight:10,
        marginLeft:5,
        borderRadius: 5,
        justifyContent:'center',
        //alignItems:'center',
        padding: 10,
        borderWidth: 3,
        borderColor:'#03256C',
        //borderColor:'#000',
        flexDirection:'row',
    },
    buttonContainer: {
        width:46,
        height: 46,
        backgroundColor:'#03256C',
        borderRadius: 23,
        justifyContent:'center',
        alignItems:'center',

    },
    textInput:{
        fontWeight: 'bold',
        fontSize: 15,
        flex:1,
        marginHorizontal:5,
        
    },
    icon:{
        marginHorizontal: 5,
    },

    buttonText:{
        color:'white',
        fontSize: 26,
        fontWeight:'bold',

    },

});

export default styles;