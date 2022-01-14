import React, { useState } from 'react';
import './index.scss';
import Popup from './components/popUp/popUp';
import Button from './components/button/button';

function App() {
  const [IsPopUpdisplayed, TogglePopUpDisplay] = useState(false);
  return (
    <div className="App">
      <div className="test-wrapper">
        <div
          onClick={() => {
            TogglePopUpDisplay(!IsPopUpdisplayed);
          }}
        >
          <Button primaryButtonColor="button-primary button">
            Toggle modal
          </Button>
        </div>

        <div>{IsPopUpdisplayed ? <Popup /> : ''}</div>
      </div>
    </div>
  );
}

export default App;
