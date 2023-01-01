import axios from "axios";

export const fetchAllData = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchByRegion = async (region) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchByName = async (name) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}