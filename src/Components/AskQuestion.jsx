import React, {useState} from "react";

const AskQuestion = ({question, answer}) => {
  const [showData, setShowData] = useState(false);

  return (
    <section>
      <div className="col_box">
        <div className="question">
          <h4>
            <span onClick={() => setShowData(!showData)}>{!showData ? '+' : '−'}</span>
            {question}
          </h4>
        </div>
        <div className="answer">
            {showData && <p>{answer}</p>}
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;
