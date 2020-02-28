import React, { useContext } from 'react';
import { ConfigContext } from '../App'

const DisplayName = () => {
  const { count } = useContext(ConfigContext);

  return (
    <div>
      {count}
    </div>
  );
}

export default DisplayName;
