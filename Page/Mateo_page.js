import React, { useState, useEffect } from 'react'
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from '../Style'
import Header from './Header';
import Api_mateo from "../Api/Api_mateo"


let Mateo_page = ( { navigation } ) => {
    
    let [ text_input_lat, set_text_input_lat ] = useState( "" );
    let [ text_input_long, set_text_input_long ] = useState( "" );
    let [ status, set_status ] = useState( "" );
    let [ suhu_temperature, set_suhu_temperature ] = useState( "" );

    async function get_data(){
        let data_api = await Api_mateo.get_data( text_input_lat, text_input_long );
        set_suhu_temperature( data_api.current.temperature_2m )
    } 

    return (


        <View style={ style.container_app }>
            <Header title_page="Mateo" btn_back={true} navigation={navigation} />
            <View style={ style.container_page }>

                <View style={ {justifyContent:"center", marginBottom:20, marginTop:20} } >
                    <Text style={ [style.text_content, {marginTop:20, marginBottom:20}]}> Latitude :  </Text>
                    <TextInput
                        value={ text_input_lat }
                        style={ { width: "100%", height: 60, paddingLeft:20, color: "#000", borderWidth:2, borderRadius: 20, fontSize:17} }
                        placeholder='Isi dengan lat'
                        onChangeText={set_text_input_lat}
                        >
                        
                    </TextInput>
                    <Text style={ [style.text_content, {marginTop:20, marginBottom:20}]}> Longitude :  </Text>

                    <TextInput
                        value={ text_input_long }
                        style={ { width: "100%", height: 60, paddingLeft:20, color: "#000", borderWidth:2, borderRadius: 20, fontSize:17} }
                        placeholder='Isi dengan long'
                        onChangeText={set_text_input_long}
                        >
                        
                    </TextInput>
                    <TouchableOpacity  
                    onPress={
                        () => {
                            get_data();
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
                        Suhu :
                    </Text>
                    <Text style={ [style.text_content,{color:"red", marginLeft: 10}] }>
                        {suhu_temperature}
                    </Text>
                </View>


            </View>

        </View>

    )

}




export default Mateo_page;
