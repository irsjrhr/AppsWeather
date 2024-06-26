import { StyleSheet  } from "react-native";



let style = StyleSheet.create({

    container_app : {
        padding:10,
        flex: 1,
    }, 
    
    header_app : {
        paddingLeft: 0,
        paddingTop:40,
        text_title:{
            fontSize : 30
        },
        paddingBottom:20
    },
    container_page:{
        paddingLeft: 18,
        paddingRight:20
    },
    text_content : {
        fontSize: 17
    },
    box_platform : {
        padding:30,
        paddingLeft:15,
        backgroundColor: "#ccc",
        marginTop:20, 
        borderRadius: 10,
        position: "relative",
        text_title : {
            fontSize : 20,
            marginBottom: 10
        },
        text_konten : {
            fontSize : 16
        }
    }





})

export default style