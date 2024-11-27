import { useContext } from "react";
import { EmotionContext } from "../contexts/EmotionContext";
import { fetchMusicByEmotion } from "../services/musicService";
import { useEffect, useState } from "react";

const MusicPlayer = () => {
  const { emotion } = useContext(EmotionContext);
  const [music, setMusic] = useState("");

  useEffect(() => {
    if (emotion) {
      fetchMusicByEmotion(emotion)
        .then((data) => setMusic(data.url)) // Supondo que o backend retorna um URL de música
        .catch((err) => console.error(err));
    }
  }, [emotion]);

  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-medium mb-4">Reproduzindo música para: {emotion}</h2>
      {music ? (
        <audio controls autoPlay src={music} className="w-full max-w-md mx-auto">
          Seu navegador não suporta o elemento de áudio.
        </audio>
      ) : (
        <p className="text-gray-500">Escolha uma emoção para ouvir música!</p>
      )}
    </div>
  );
};

export default MusicPlayer;
