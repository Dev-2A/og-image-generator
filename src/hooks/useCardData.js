import { useState, useCallback } from "react";
import { defaultCardData } from "../data/defaults";

export default function useCardData() {
  const [cardData, setCardData] = useState(defaultCardData);

  const updateField = useCallback((field, value) => {
    setCardData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const updateTechStack = useCallback((rawString) => {
    const techs = rawString
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    setCardData((prev) => ({ ...prev, techStack: techs }));
  }, []);

  const resetData = useCallback(() => {
    setCardData(defaultCardData);
  }, []);

  return { cardData, updateField, updateTechStack, resetData };
}
