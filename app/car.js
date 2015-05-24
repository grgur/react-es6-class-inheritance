import Vehicle from './vehicle';

class Car extends Vehicle {
    constructor(props) {
        super(props);
        this.state.icon = '🚗';
    }
}

export default Car;
