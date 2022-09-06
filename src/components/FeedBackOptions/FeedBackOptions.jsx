import React, { Component } from "react";

class FeedbackOptions extends Component {
    render() {
        return (
        <div>
            <div className="buttonWrapper">
                <button className="button good"  type="click" onClick={this.props.handleChangeGood}>Good</button>
                <button className="button neutral" type="click" onClick={this.props.handleChangeNeutral}>Neutral</button>
                <button className="button bad" type="click" onClick={this.props.handleChangeBad}>Bad</button>
            </div>
        </div>
        )
    }   
}
export default FeedbackOptions;