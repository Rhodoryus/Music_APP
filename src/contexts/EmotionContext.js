import { createContext, useState } from "react";

export const EmotionContext = createContext();

export const EmotionProvider = ({ children }) => {
  const [emotion, setEmotion] = useState("");

  return (
    <EmotionContext.Provider value={{ emotion, setEmotion }}>
      {children}
    </EmotionContext.Provider>
  );
};
