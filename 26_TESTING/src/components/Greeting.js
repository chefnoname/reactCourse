import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Assalaamu 'alaykum al-Ardh</h2>
      {!changeText && <Output>Ahbaabi fillaah</Output>}
      {changeText && <p>Changed</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
