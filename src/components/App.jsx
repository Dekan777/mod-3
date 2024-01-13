import './App.css';
import { useState } from 'react';

export const App = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = evt => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" name="terms" checked={hasAccepted} onChange={handleChange} />I accept
        terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};
