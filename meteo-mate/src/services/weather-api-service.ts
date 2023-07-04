import axios from 'axios';
import { API_KEY } from '../constants/constants';

export const getWeatherData = async (city: string) =>{


const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {
    q: city,
    days: '5'
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  return response.data;  
} catch (error) {
	console.error(error);
  return null;
}
}