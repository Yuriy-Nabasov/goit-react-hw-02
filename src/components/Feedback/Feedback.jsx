export default function Feedback({ data, totalFeedback }) {
  return (
    <>
      <p>Good: {data.good} </p>
      <p>Neutral: {data.neutral}</p>
      <p>Bad: {data.bad}</p>
      {totalFeedback > 0 && (
        <>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {Math.round((data.good / totalFeedback) * 100)}%</p>
        </>
      )}
    </>
  );
}
