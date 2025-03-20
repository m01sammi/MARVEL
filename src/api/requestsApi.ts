import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = "e2b19b0d1fa88f7f2ee7a062b1312aa9";
const PRIVATE_KEY = "944799c6bf0b7d278bc929d8e21657e6e793cb1a";
const BASE_URL = "https://gateway.marvel.com/v1/public/";

interface Thumbnail {
  path: string;
  extension: string;
}

interface ComicPrice {
  type: string;
  price: number;
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
  prices: ComicPrice[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: { items: { name: string }[] };
}

interface ApiResponse<T> {
  data: {
    results: T[];
  };
}

const generateHash = (ts: number): string => {
  return md5(ts + PRIVATE_KEY + PUBLIC_KEY);
};

export const fetchComics = async (): Promise<Comic[]> => {
  const ts = Date.now();
  const hash = generateHash(ts);

  try {
    const response = await axios.get<ApiResponse<Comic>>(`${BASE_URL}comics`, {
      params: {
        ts,
        apikey: PUBLIC_KEY,
        hash,
        limit: 30,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Ошибка при загрузке комиксов:", error);
    return [];
  }
};

export const fetchCharacters = async (): Promise<Character[]> => {
  const ts = Date.now();
  const hash = generateHash(ts);

  try {
    const response = await axios.get<ApiResponse<Character>>(`${BASE_URL}characters`, {
      params: {
        ts,
        apikey: PUBLIC_KEY,
        hash,
        limit: 10,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Ошибка при загрузке персонажей:", error);
    return [];
  }
};

export const fetchComicsById = async (comicsId: number): Promise<Comic | null> => {
  const ts = Date.now();
  const hash = generateHash(ts);

  try {
    const response = await axios.get<ApiResponse<Comic>>(`${BASE_URL}comics/${comicsId}`, {
      params: {
        ts,
        apikey: PUBLIC_KEY,
        hash,
      },
    });
    return response.data.data.results[0] || null;
  } catch (error) {
    console.error("Ошибка при загрузке информации о комиксе:", error);
    return null;
  }
};
