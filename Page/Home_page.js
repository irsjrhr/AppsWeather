import React, {useState, useEffect}from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from '../Style'
import Header from './Header';

let Home_page = ( { navigation } ) => {

    let data_platform = [

        { judul : "Open Weather Platform", sub_judul : "Gunakan data berbasis data platform Open Weather", screen : "OpenWeather_page" },
        { judul : "Mateo Plarform", sub_judul : "Gunakan data berbasis data platform Mateo", screen : "Mateo_page" }

    ];

    let box_platform_component_list = []
    for (let i = 0; i < data_platform.length; i++) {
        let row_obj = data_platform[i];
        let box_platform_component= <Box_platform navigation={navigation} judul={ row_obj.judul } sub_judul = { row_obj.sub_judul } screen={ row_obj.screen } /> 
        box_platform_component_list.push( box_platform_component);
    }   

    let [display_splash, set_display_splash] = useState("block");
    setTimeout(function(e) {       
        set_display_splash("none");
    }, 3000)

    return (





        <View style={ style.container_app }>
            {/* Splash Screen Buatan Shandy Bro */}
            <View style={{ display:display_splash , position:"absolute", top:0,left:0, backgroundColor:"none",width:1000,height: 1000, zIndex: 99, flex:1 }}>
                <View style={ {flex : 1, backgroundColor:"white", position: 'relative' } }>
                    <View style={ { position:"absolute", top: 150, left: 90, fontSize:30 } }>

                        <Image
                        source={require('../logo.png')}
                        style={{ width: 200, height: 200, marginLeft:10, marginTop:10 }}
                        />

                        <Text style={{ position:"relative", fontSize:30 }}> Shandy Project </Text>
                        <Text style={{ position:"relative", fontSize:30, marginTop:10 }}> Weather Apps </Text>

                        <Image
                        source={require('../loading.gif')}
                        style={{ width: 100, height: 100, marginLeft:60, marginTop:30 }}
                        />

                    </View>

                </View>
            </View>
            {/* Splash Screen Buatan Shandy Bro */}

            
            <Header title_page="Selamat Datang" navigation ={navigation} />
            <View style={ style.container_page }>
                <Text style={ style.text_content }> 
                    Pilih Platform Yang Kamu Mau
                </Text>

                { box_platform_component_list }
            
            </View>

        </View>

    )

}


let Box_platform =  ( prop ) =>{

    return (
        <TouchableOpacity onPress={()=> prop.navigation.navigate( prop.screen )}>
            <View style={ style.box_platform }>
                <Text style={ style.box_platform.text_title}>
                    {prop.judul}
                </Text>
                <Text style={ style.box_platform.text_konten}>
                    {prop.sub_judul}
                </Text>
                <View style={ { position:"absolute", top:30, right:30 } }>
                    <Icon name="chevron-right" size={30} color="#000" />
                </View>
            </View>
        </TouchableOpacity>
    )
    
}


export default Home_page;
