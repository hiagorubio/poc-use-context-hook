import React from 'react';
import './App.css';
import DisplayName from './components/DisplayName'
import SimpleButton from './components/SimpleButton'
import NestedComponent from './components/NestedComponent'
export const ConfigContext = React.createContext();

const configValue = {
  contextMessage: 'This is a context message',
  onClick: () => {
    window.alert('Alert called by context')
  },
  onChildrenClick: () => {
    window.alert('You click in the children button')
  }
}

const App = () => {
  return (
    <ConfigContext.Provider value={configValue}>
      <DisplayName />
      <br />
      <SimpleButton />
      <br />
      <NestedComponent />
    </ConfigContext.Provider>
  );
}

export default App;
