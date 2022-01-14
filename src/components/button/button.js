import React from 'react';

function Button({ children, primaryButtonColor, name }) {
  return (
    <div>
      <div>
        <button className={primaryButtonColor}>{children} </button>
      </div>
    </div>
  );
}

export default Button;
