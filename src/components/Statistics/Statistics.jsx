import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  goodValue,
  neutralValue,
  badValue,
  totalFeedbackValue,
  percentageValue,
}) => (
  <div className={css.statistic_container}>
    <h2 className={css.statistic_header}>Feedback statistics:</h2>
    <span className={css.counter_good}>Good: {goodValue}</span>
    <span className={css.counter_neutral}>Neutral: {neutralValue}</span>
    <span className={css.counter_bad}>Bad: {badValue}</span>
    <span className={css.counter_total}>Total: {totalFeedbackValue}</span>
    <span className={css.counter_percentage}>
      Positive feedback: {percentageValue}%
    </span>
  </div>
);
Statistics.propTypes = {
  goodValue: PropTypes.number.isRequired,
  neutralValue: PropTypes.number.isRequired,
  badValue: PropTypes.number.isRequired,
  totalFeedbackValue: PropTypes.number,
  percentageValue: PropTypes.number,
};
export default Statistics;
