import axios from 'axios';

export const fetchAllData = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data;
};

export const fetchByRegion = async (region) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/region/${region}`
  );
  return response.data;
};

export const fetchByName = async (name) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/name/${name}`
  );
  return response.data;
};

export const fetchByCode = async (code) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/alpha/${code}`
  );
  return response.data;
};