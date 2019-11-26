import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="div-img" style={{left: '25pt', top: '70pt', width: '200pt', transform: 'rotate(-20deg)'}}>
                    <img src="home/images/dogtor.jpg" alt="dogtor" />
                </div>
                <div className="div-img" style={{float: 'right', left: '-175pt', top: '-40pt', width: '160pt', transform: 'rotate(-10deg)'}}>
                    <img src="home/images/you-planet.jpg" alt="you-planet" />
                </div>
                <div className="card-body center-content big-content">
                    <h4 className="card-title"><p className="big-p">Dad jokes are the best jokes</p></h4>
                    <br />
                    <p>You know it's true, so stop trying to fight it.</p>
                    <p>The thing with most dad jokes, though, is that you've heard them all before. Thousands of times. From your own dad.</p>
                </div>
                <div className="div-img" style={{left: '30pt', top: '50pt', width: '140pt', transform: 'rotate(10deg)'}}>
                    <img src="home/images/pork-chop.jpg" alt="pork-chop" />
                </div>
                <div className="div-img" style={{float: 'right', left: '0pt', top: '0pt', width: '140pt', transform: 'rotate(0deg)'}}>
                    <img src="home/images/investigator.jpg" alt="pork-chop" />
                </div>
                <div className="div-img" style={{left: '50%', top: '-150px', width: '140pt', transform: 'rotate(-5deg)'}}>
                    <img src="home/images/reflect.jpg" alt="pork-chop" />
                </div>
            </div>
        );
    }
}

export default HomePage;