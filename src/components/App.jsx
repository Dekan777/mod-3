import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import './App.css';

export const App = () => {
  const initialFeedbackTypes = JSON.parse(window.localStorage.getItem('saved-value')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackTypes, setFeedbackTypes] = useState(initialFeedbackTypes);

  useEffect(() => {
    window.localStorage.setItem('saved-value', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  return (
    <>
      <ul className="conteinerApp">
        <li>
          <Description text="Sip Happens Café">
            Please leave your feedback about our service by selecting one of the options below.
          </Description>
        </li>

        <li>
          <Options value={feedbackTypes} valueSet={setFeedbackTypes} />
        </li>

        <li>
          <Feedback value={feedbackTypes} />
        </li>
      </ul>
    </>
  );
};
