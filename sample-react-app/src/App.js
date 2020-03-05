import React from 'react';
import Base from 'terra-base';
import Checkbox from 'terra-form-checkbox';
import DatePicker from 'terra-date-picker';
import './App.css';

function App() {
  return (
    <Base className="App" locale="en">
      <Checkbox id="defaultCheckbox" labelText="Default Checkbox" />          
      <DatePicker
        name="date-input"
        id="default"
      />
    </Base>
  );
}

export default App;
