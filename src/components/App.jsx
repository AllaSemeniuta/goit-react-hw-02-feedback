import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Box } from './Box/Box';

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
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return ((this.state.good / total) * 100).toFixed();
  };

  render() {
    const feedbackCategories = ['good', 'neutral', 'bad'];

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
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Box>
      </>
    );
  }
}
