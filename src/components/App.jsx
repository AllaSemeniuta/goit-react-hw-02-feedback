import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Box } from './Box/Box';
import { Notificstion } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const options = e.target.textContent;

    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return ((good / this.countTotalFeedback()) * 100).toFixed();
  };

  render() {
    const feedbackCategories = Object.keys(this.state);

    return (
      <>
        <Box py="15px" px="30px">
          <GlobalStyle />
          <Section title="Please leave feedback" />
          <FeedbackOptions
            options={feedbackCategories}
            onLeaveFeedback={this.addFeedback}
          />
          <Section title="Statistics" />
          {this.countTotalFeedback() >= 1 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notificstion message="There is no feedback" />
          )}
        </Box>
      </>
    );
  }
}
