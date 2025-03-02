import { useState, useEffect } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";

import { Analytics } from "@vercel/analytics/react";

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
    setData((prevData) => {
      if (key === "reset") {
        return { good: 0, neutral: 0, bad: 0 };
      }
      return {
        ...prevData,
        [key]: prevData[key] + 1,
      };
    });
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
        <Analytics />
      </Container>
    </Section>
  );
}

export default App;
