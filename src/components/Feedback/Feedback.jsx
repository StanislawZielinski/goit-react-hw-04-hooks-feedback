import React, { Component } from "react";
import "./Feedback.css";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedBackOptions/FeedBackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

class Feedback extends Component {
    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue
    }
    static defaultProps = {
        step: 1,
        initialValue: 0,
    };
    handleChangeGood = (evt) => {
        evt.preventDefault();
        this.setState((state, props) => ({good: state.good+this.props.step}))
    };
    handleChangeBad = (evt) => {
        evt.preventDefault();
        this.setState((state, props) => ({bad: state.bad+this.props.step}))
    };
    handleChangeNeutral = (evt) => {
        evt.preventDefault();
        this.setState((state, props) => ({neutral: state.neutral+this.props.step}))
    };
    countTotalFeedback = () => {
        let total = 0;
        for (const value in this.state) {
            total += this.state[value];
        }
        return total
    }
    countPositiveFeedbackPercentage = () => {
        let positive = this.state.good*100 / this.countTotalFeedback();
        return positive.toFixed(2) > 0 ? positive.toFixed(2) : 0
    }
    render() {
        return (
            <div>
            <Section title="PLEASE LEAVE FEEDBACK">
                <FeedbackOptions
                    handleChangeGood={this.handleChangeGood}
                    handleChangeNeutral={this.handleChangeNeutral}
                    handleChangeBad={this.handleChangeBad}
                />
                </Section>
                {this.countTotalFeedback() === 0 ?
                    (<Notification message="There is no feedback" />) : (
                        <Section title="Statistics">
                            <Statistics
                                good={this.state.good}
                                neutral={this.state.neutral}
                                bad={this.state.bad}
                                total={this.countTotalFeedback()}
                                positivePercentage={this.countPositiveFeedbackPercentage()}
                            />
                        </Section>)}
        </div>
        )
    }
    
}

export default Feedback;