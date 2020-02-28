import React, { useState, useEffect } from 'react';
import './App.css';
import DisplayName from './components/DisplayName'
import SimpleButton from './components/SimpleButton'
import NestedComponent from './components/NestedComponent'
export const ConfigContext = React.createContext();



const App = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(null)

  useEffect(() => {
    setDate(new Date());
  }, [])

  const configValue = {
    contextMessage: 'This is a context message',
    onClick: () => {
      window.alert('Alert called by context')
    },
    onChildrenClick: () => {
      setCount(count + 1)
    },
    resetCount: () => {
      setCount(0)
    },
    count,
    buttonText: 'Click Me',
    date
  }

  return (
    <ConfigContext.Provider value={configValue}>
      <DisplayName />
      <br />
      <DisplayName />
      <br />
      <DisplayName />
      <br />
      <SimpleButton />
      <br />
      <NestedComponent />
    </ConfigContext.Provider>
  );
}

export default App;
