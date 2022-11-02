import { useState } from "react";
import "./Questions.css";


function Questions() {
  const [toggleType, setToggleType] = useState(1);

  const toggleQuestion = (index) => {
    setToggleType(index);
  };
  return (
    <div className="faq-container">
        <div className="faq-blocs">
        <button
          className={toggleType === 1 ? "faq active-faq" : "faq"}
          onClick={() => toggleQuestion(1)}
        >
          Farmers
        </button>
        <button
          className={toggleType === 2 ? "faq active-faq" : "faq"}
          onClick={() => toggleQuestion(2)}
        >
          How to enter the event
        </button>
        <button
          className={toggleType === 3 ? "faq active-faq" : "faq"}
          onClick={() => toggleQuestion(3)}
        >
          What to bring
        </button>
        </div>
    </div>
  );
}
export default Questions;