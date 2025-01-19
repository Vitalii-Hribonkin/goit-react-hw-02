const Feedback = ({ feedbacks, totalFeedback, positiveFeedbackPercentage }) => {


    return (
    <div>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;
