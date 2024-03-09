import axios from "axios";

const fetchData = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: `https://currency-conversion-and-exchange-rates.p.rapidapi.com/${endpoint}`,
        params: params,
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
          }
      };

      console.log(options)
      
      try {
          const response = await axios.get(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/${endpoint}`, options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}

export default fetchData;