import React, { Component } from 'react';
import NoFeedback from '../NoFeedback/NoFeedback';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import css from './Feedbacks.module.css';

class Feedbacks extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  feedbackTitle = 'Please, leave your feedback!';
  statisticTitle = '';

  onGoodClick = () => {
    this.setState(prevState => ({
      good: (prevState.good += 1),
    }));
  };
  onNeutralClick = () => {
    this.setState(prevState => ({
      neutral: (prevState.neutral += 1),
    }));
  };
  onBadClick = () => {
    this.setState(prevState => ({
      bad: (prevState.bad += 1),
    }));
  };
  countTotalFeedback = () => {
    let totalFeedbacks = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedbacks;
  };
  countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.floor(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    if (isNaN(positivePercentage)) {
      return 0;
    }
    return positivePercentage;
  };

  render() {
    const titleMessage = 'There is no feedback';
    return (
      <div className={css.feedback_wrapper}>
        <Section
          title={this.feedbackTitle}
          children={
            <FeedbackOptions
              onGoodClick={this.onGoodClick}
              onNeutralClick={this.onNeutralClick}
              onBadClick={this.onBadClick}
            />
          }
        />
        {this.countTotalFeedback() === 0 ? (
          <Section
            title="Current statistic:"
            children={<NoFeedback message={titleMessage} />}
          />
        ) : (
          <Section
            title={this.statisticTitle}
            children={
              <Statistics
                goodValue={this.state.good}
                neutralValue={this.state.neutral}
                badValue={this.state.bad}
                totalFeedbackValue={this.countTotalFeedback()}
                percentageValue={this.countPositiveFeedbackPercentage()}
              />
            }
          />
        )}
      </div>
    );
  }
}

export default Feedbacks;
