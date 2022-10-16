import React, { Component } from 'react';
import NoFeedback from './NoFeedback/NoFeedback';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';

export class App extends Component {
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
  onLeaveFeedback = el => {
    this.setState(prevState => {
      return {
        [el]: prevState[el] + 1,
      };
    });
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
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.feedback_wrapper}>
        <Section title={this.feedbackTitle}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeavefeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Section title="Current statistic:">
            <NoFeedback message={titleMessage} />
          </Section>
        ) : (
          <Section title={this.statisticTitle}>
            <Statistics
              goodValue={good}
              neutralValue={neutral}
              badValue={bad}
              totalFeedbackValue={this.countTotalFeedback()}
              percentageValue={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
