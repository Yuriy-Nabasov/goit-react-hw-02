import { useState, useEffect } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Feedback from "../Feedback/Feedback";
import "./App.css";

function App() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("feedbackData");
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = data.good + data.neutral + data.bad;

  const updateFeedback = (key) => {
    const newData = { ...data };
    if (key === "reset") {
      newData.good = 0;
      newData.neutral = 0;
      newData.bad = 0;
    } else {
      newData[key] += 1;
    }

    setData(newData);
    localStorage.setItem("feedbackData", JSON.stringify(newData));
  };

  useEffect(() => {
    localStorage.setItem("feedbackData", JSON.stringify(data));
  }, [data]);

  return (
    <Section>
      <Container>
        <Description />
        <Options update={updateFeedback} totalFeedback={totalFeedback} />
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback data={data} totalFeedback={totalFeedback} />
        )}
      </Container>
    </Section>
  );
}

export default App;
