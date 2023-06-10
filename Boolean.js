import React, { useState } from 'react';

function App() {
  const [isTrue, setIsTrue] = useState(true);

  const handleClick = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: isTrue ? 'red' : 'blue' }}
        onClick={handleClick}
      >
        My Button
      </button>
    </div>
  );
}

export default App;







