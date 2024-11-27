import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Ajuste para o backend

export const fetchMusicByEmotion = async (emotion) => {
  try {
    const response = await axios.get(`${BASE_URL}/music`, {
      params: { emotion },
    });
    return response.data; // Supondo que retorna { url: 'link-da-musica' }
  } catch (error) {
    console.error("Erro ao buscar música:", error);
    throw error;
  }
};
