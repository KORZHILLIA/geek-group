import { useState } from "react";

const useDropdown = () => {
  const [idx, setIdx] = useState(0);
  const [boxVisible, setBoxVisible] = useState(false);

  const toggleBox = () => {
    setBoxVisible((prevBox) => !prevBox);
  };

  const changeIdx = (index) => {
    setIdx(index);
    toggleBox();
  };
  return { idx, boxVisible, toggleBox, changeIdx };
};

export default useDropdown;
