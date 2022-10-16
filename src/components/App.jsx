import React, { useState } from 'react';
import NoFeedback from './NoFeedback/NoFeedback';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateMap = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };
  const feedbackTitle = 'Please, leave your feedback!';
  const emptyFeedbackMessage = "There is no feedback's yet";
  const statisticTitle = '';

  const onLeaveFeedback = e => {
    stateMap[e](prev => prev + 1);
  };
  const countTotalFeedback = () => {
    let totalFeedbacks = good + neutral + bad;
    return totalFeedbacks;
  };
  const countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.floor((good * 100) / countTotalFeedback());
    if (isNaN(positivePercentage)) {
      return 0;
    }
    return positivePercentage;
  };

  return (
    <div className={css.feedback_wrapper}>
      <Section title={feedbackTitle}>
        <FeedbackOptions
          options={Object.keys(stateMap)}
          onLeavefeedback={onLeaveFeedback}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Section title="Current statistic:">
          <NoFeedback message={emptyFeedbackMessage} />
        </Section>
      ) : (
        <Section title={statisticTitle}>
          <Statistics
            goodValue={good}
            neutralValue={neutral}
            badValue={bad}
            totalFeedbackValue={countTotalFeedback()}
            percentageValue={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
};
