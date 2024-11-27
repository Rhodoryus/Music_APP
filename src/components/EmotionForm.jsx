import { useContext, useState } from "react";
import { EmotionContext } from "../contexts/EmotionContext";

const EmotionForm = () => {
  const { setEmotion } = useContext(EmotionContext);
  const [inputEmotion, setInputEmotion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmotion(inputEmotion);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-4">
      <label className="mb-2 text-lg font-medium">Escolha uma emoção:</label>
      <input
        type="text"
        value={inputEmotion}
        onChange={(e) => setInputEmotion(e.target.value)}
        className="border rounded p-2 mb-4 w-64"
        placeholder="Ex: Feliz, Triste, Animado"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Enviar
      </button>
    </form>
  );
};

export default EmotionForm;
