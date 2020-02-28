import React, { useContext } from 'react';
import { ConfigContext } from '../App'

const DisplayName = () => {
  const context = useContext(ConfigContext);

  return (
    <button onClick={() => context.onClick()}>
      {context.buttonText}
    </button>
  );
}

export default DisplayName;
