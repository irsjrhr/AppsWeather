import { Alert } from "react-native";

let Api_mateo = {


    API_URL : `https://api.open-meteo.com/v1/forecast`,
    get_data : async function(latitude, longitude){



        const url = this.API_URL + `?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.log("Request berhasil terjadi, tapi format request tidak sesuai!");
            }
            const data = await response.json(); // Datanya jadi object
            console.log(data);
            return data;
        } catch (error) {
            // console.error('Error fetching weather data: ', error);
            console.log('Error fetching weather data: ', error);
            Alert.alert("Terjadi kesalahan saat melakukan request, periksa endpoint mu!");
            throw error;
        }
        
    }



}


export default Api_mateo
