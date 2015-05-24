import React from 'reactjs/react';
import Car from './car';
import Train from './train';

React.render(
  <div>
    <Car name='Beemer' driver="Dwayne" />
    <Train name='Maglev' driver="Geronimo" />
  </div>
  , document.getElementById('app')
);
