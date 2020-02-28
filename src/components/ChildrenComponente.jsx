import React, { useContext, useEffect, useState } from 'react';
import { ConfigContext } from '../App'

const DisplayName = () => {
  const date2 = new Date();

  const context = useContext(ConfigContext);
  return (
    <div style={{ display: 'grid' }}>
      <div>
        {context.count}
      </div>
      <div>
        {context.date && context.date.toString()}
      </div>
      <div>
        <button onClick={() => context.onChildrenClick()}>
          +1
       </button>
      </div>
      <div>
        <button onClick={() => context.resetCount()}>
          reset count
       </button>
      </div>
      <div>
        Date {date2.toString()}
      </div>
    </div>
  );
}

export default DisplayName;
