import React, { Component } from "react";

import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import LegendStatistics from "./components/LegendStatistics/LegendStatistics";

export class App extends Component {
  static defaultProps = {
    initVote: 0,
  };

  state = {
    good: this.props.initVote,
    neutral: this.props.initVote,
    bad: this.props.initVote,
  };

  vote = (data) => {
    const rangVote = data.target.name;
    this.setState((prevState) => {
      prevState[rangVote] = prevState[rangVote] + 1;
      this.countTotalFeedback();
      return { ...prevState };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good
      ? ((this.state.good * 100) / this.countTotalFeedback()).toFixed(0)
      : 0;
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.vote}
        />
        <LegendStatistics title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </LegendStatistics>
      </Section>
    );
  }
}
