import React from "react";

const FeedbackOptions = ({ handleChangeGood, handleChangeNeutral, handleChangeBad } ) => {
        return (
        <div>
            <div className="buttonWrapper">
                <button className="button good"  type="click" onClick={handleChangeGood}>Good</button>
                <button className="button neutral" type="click" onClick={handleChangeNeutral}>Neutral</button>
                <button className="button bad" type="click" onClick={handleChangeBad}>Bad</button>
            </div>
        </div>
        )
}
export default FeedbackOptions;