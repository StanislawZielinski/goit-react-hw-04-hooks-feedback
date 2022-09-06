import React, { useState } from "react";
import "./Feedback.css";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedBackOptions/FeedBackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";



const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleChangeGood = (evt) => {
        evt.preventDefault();
        setGood(good + 1);
    };
    const handleChangeBad = (evt) => {
        evt.preventDefault();
        setBad(bad+1)
    };
    const handleChangeNeutral = (evt) => {
        evt.preventDefault();
        setNeutral(neutral+1)
    };
    const countTotalFeedback = () => {
        let total = 0;
        total = good+neutral+bad;
        return total
    }
    const countPositiveFeedbackPercentage = () => {
        let positive = good*100 / countTotalFeedback();
        return positive.toFixed(2) > 0 ? positive.toFixed(2) : 0
    }

    return (
            <div>
                <Section title="PLEASE LEAVE FEEDBACK">
                    <FeedbackOptions
                        handleChangeGood={handleChangeGood}
                        handleChangeNeutral={handleChangeNeutral}
                        handleChangeBad={handleChangeBad}
                    />
                </Section>
                {countTotalFeedback() === 0 ?
                    (<Notification message="There is no feedback" />) : (
                        <Section title="Statistics">
                            <Statistics
                                good={good}
                                neutral={neutral}
                                bad={bad}
                                total={countTotalFeedback()}
                                positivePercentage={countPositiveFeedbackPercentage()}
                            />
                        </Section>)}
            </div>
        ) 
}

export default Feedback;