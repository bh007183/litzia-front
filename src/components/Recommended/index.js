import React from "react";
import "./style.css";

function Recommended() {
    return (
        // Will use props for this component once we actually have inventory to base it off of
        <div id="recommendedItems">
            <div className="row">
                <div className="col s12">
                    <div className="card" id="card1">
                        <div className="card-image">
                            <img id="img1" src="https://www.saviantconsulting.com/images/blog/10-reasons-why-choose-azure-for-your-enterprise.png"></img>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card.</p>
                            <p>$129.99</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://www.xerox.com/api/utils/optimise?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FKNjgrQbD0Ng%2Fmaxresdefault.jpg&webp=true"></img>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card.</p>
                            <p>$2499.99</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://miro.medium.com/max/512/1*DQxb51_P6QQRSyTGMrxfBQ.jpeg"></img>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card.</p>
                            <p>$199.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Recommended;
