import { Alert } from "react-native";

let Api_openweather = {


    API_KEY : '3b76b97ccc62cdeedb8e0ec646ec2618', //Buat di website dashboard openweathernya
    API_URL : `https://api.openweathermap.org/data/2.5/weather`,
    get_data : async function(city){

        const url = `${this.API_URL}?q=${city}&appid=${this.API_KEY}&units=metric`;

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


export default Api_openweather
