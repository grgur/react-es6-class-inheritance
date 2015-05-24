import React from 'reactjs/react';
import Vehicle from './vehicle';

class Train extends Vehicle {
    constructor(props) {
        super(props);
        this.state.icon = '🚄';
        this.state.fuel = 98;
    }

    getLocation() {
        var myLocation = 'Location data not allowed for this vehicle type.';

        return (
            <span>📍{myLocation}</span>
        )
    }
}

export default Train;
