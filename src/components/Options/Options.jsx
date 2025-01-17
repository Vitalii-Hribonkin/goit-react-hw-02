const Options = ({ updateFeedback, resetFeedbacks, hasFeedbacks }) => {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {hasFeedbacks && <button onClick={resetFeedbacks}>Reset</button>}
    </div>
  );
};

export default Options;
