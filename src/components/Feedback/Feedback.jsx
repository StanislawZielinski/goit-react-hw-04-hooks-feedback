import React, { useState, useEffect } from "react";
import "./Feedback.css";
// import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedBackOptions/FeedBackOptions";
import Section from "components/Section/Section";
// import Notification from "components/Notification/Notification";



const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleChangeGood = (evt) => {
        evt.preventDefault();
        setGood(good+1)
    };
    const handleChangeBad = (evt) => {
        evt.preventDefault();
        setBad(bad+1)
    };
    const handleChangeNeutral = (evt) => {
        evt.preventDefault();
        setNeutral(neutral+1)
    };
    // const countTotalFeedback = () => {
    //     let total = 0;
    //     for (const value in this.state) {
    //         total += this.state[value];
    //     }
    //     return total
    // }
    // countPositiveFeedbackPercentage = () => {
    //     let positive = this.state.good*100 / this.countTotalFeedback();
    //     return positive.toFixed(2) > 0 ? positive.toFixed(2) : 0
    // }

    return (
        // <div>
        //     {good}<br/>
        //     <button type="button" onClick={handleChangeGood}>Increment value by 1</button>    
        // </div>
            // <div>
                <Section title="PLEASE LEAVE FEEDBACK">
                    <FeedbackOptions
                        handleChangeGood={handleChangeGood}
                        handleChangeNeutral={handleChangeNeutral}
                        handleChangeBad={handleChangeBad}
                    />
                </Section>
            //     {/* {this.countTotalFeedback() === 0 ?
            //         (<Notification message="There is no feedback" />) : (
            //             <Section title="Statistics">
            //                 <Statistics
            //                     good={this.state.good}
            //                     neutral={this.state.neutral}
            //                     bad={this.state.bad}
            //                     total={this.countTotalFeedback()}
            //                     positivePercentage={this.countPositiveFeedbackPercentage()}
            //                 />
            //             </Section>)} */}
            // </div>
        ) 
}

export default Feedback;