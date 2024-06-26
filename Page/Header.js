import { View, Text, TouchableOpacity, Alert } from 'react-native'
import style from '../Style'
import Icon from 'react-native-vector-icons/FontAwesome5';


let Header = ( prop ) => {

    let back_component;
    if ( prop.btn_back == true ) {
        back_component = <TouchableOpacity onPress={ () => prop.navigation.navigate( "Home_page" ) } style={{ position:"absolute", top:45, right:10,width:50, height:70, paddingRight:10, textAlign:"right", zIndex:99 }}>
        <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>

    }

    return (

        <View style={ [style.header_app, {position:"relative"}]}>

            { back_component }
            <Text style={ style.header_app.text_title }>  {prop.title_page}  </Text>

        </View>
    )

}



export default Header