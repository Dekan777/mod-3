import css from './Options.module.css';
export const Options = ({ value, valueSet }) => {
  const handleClick = type => {
    const newFeedbackTypes = { ...value };
    newFeedbackTypes[type] += 1;

    valueSet(newFeedbackTypes);
  };

  const handleReset = () => {
    valueSet({ good: 0, neutral: 0, bad: 0 });
  };

  const hasFeedback = value.good + value.neutral + value.bad > 0;

  return (
    <div className={css.btnItem}>
      <button className={css.btn} onClick={() => handleClick('good')}>
        Good
      </button>
      <button className={css.btn} onClick={() => handleClick('neutral')}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => handleClick('bad')}>
        Bad
      </button>
      {hasFeedback && (
        <button className={css.btn} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};
