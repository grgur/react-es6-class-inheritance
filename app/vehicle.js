import React from 'reactjs/react';

class Vehicle extends React.Component {
    /**
     * this.setState doesn't quite exist while in constructor so we have to 
     * access it as a regular object
     */
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            fuel: 100,
            icon: ''
        };
    }

    /**
     * We could easily override this function in a subclass
     */
    getLocation() {
        var myLocation = this.state.location || 'Where am I?';

        return (
            <span>📍{myLocation}</span>
        )
    }

    render() {
        return (
            <div className="vehicle">
                <div className="name">{this.state.icon} {this.props.name}</div>
                <div className="driver">Driver: {this.props.driver}</div>
                <div className="meta">⛽️ {this.state.fuel} {this.getLocation()}</div>
            </div>
        );
    }
}

export default Vehicle;
