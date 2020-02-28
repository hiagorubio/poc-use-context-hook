import React, { useContext } from 'react';
import { ConfigContext } from '../App'

const DisplayName = () => {
  const { contextMessage } = useContext(ConfigContext);

  return (
    <div>
      {contextMessage}
    </div>
  );
}

export default DisplayName;
