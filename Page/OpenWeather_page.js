import Reacts,{ useState, useEffect } from 'react'
import { View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from '../Style'
import Header from './Header';

import Api_openweather from '../Api/Api_openweather'


let OpenWeather_page = ( { navigation } ) => {
    

    let [ text_input, set_text_input ] = useState( "" );
    let [ suhu_temparatur, set_suhu_temparatur ] = useState( "" );

    async function get_data () {
        let data_output_weather = await Api_openweather.get_data( text_input );
        let main_temp = data_output_weather.main.temp;
        console.log(  data_output_weather );
        set_suhu_temparatur( main_temp );
    }

    return (



        <View style={ style.container_app }>
            <Header title_page="Open Weather" btn_back={true} navigation = {navigation} />
            <View style={ style.container_page }>

                <View style={ {justifyContent:"center", marginBottom:20, marginTop:20} } >
                    <TextInput
                        value={ text_input }
                        style={ { width: "100%", height: 60, paddingLeft:20, color: "#000", borderWidth:2, borderRadius: 20, fontSize:17} }
                        placeholder='Isi dengan nama kota'
                        onChangeText={set_text_input}
                        >
                        
                    </TextInput>
                    <TouchableOpacity  
                    onPress={
                        () => {
                            get_data()
                        }
                    }
                    >
                        <View style={
                            {   
                                backgroundColor:"darkcyan",
                                width: "100%",
                                height: 50,
                                paddingTop:8,
                                marginTop:20,
                                borderRadius: 20
                            }
                        }>
                            <Text style={{ textAlign:"center",color: "white", fontSize:20}}> Submit </Text>
                        </View>
                    </TouchableOpacity>



                </View>
                        
                {/* Output API */}
                <View style={ { flexDirection: "row", marginTop:20, justifyContent:"center"} }>
                    <Text style={style.text_content}>
                        Suhu Temperatur :
                    </Text>
                    <Text style={ [style.text_content,{color:"red", marginLeft: 10}] }>
                        {suhu_temparatur}
                    </Text>
                </View>


            </View>

        </View>

    )

}




export default OpenWeather_page;
