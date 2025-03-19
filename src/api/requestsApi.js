import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = "e2b19b0d1fa88f7f2ee7a062b1312aa9";
const PRIVATE_KEY = "944799c6bf0b7d278bc929d8e21657e6e793cb1a";
const BASE_URL = "https://gateway.marvel.com/v1/public/";

const generateHash = (ts) => {
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  return hash;
};

export const fetchComics = async () => {
  const ts = new Date().getTime(); 
  const hash = generateHash(ts); 

  try {
    const response = await axios.get(`${BASE_URL}comics`, {
      params: {
        ts,
        apikey: PUBLIC_KEY,
        hash,
        limit: 100, 
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Ошибка при загрузке комиксов:", error);
    return [];
  }
};

export const fetchCharacters = async () => {
  const ts = new Date().getTime(); 
  const hash = generateHash(ts); 

  try {
    const response = await axios.get(`${BASE_URL}characters`, {
      params: {
        ts,
        apikey: PUBLIC_KEY,
        hash,
        limit: 100, 
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Ошибка при загрузке персонажей:", error);
    return [];
  }
};
