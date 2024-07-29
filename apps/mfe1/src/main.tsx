import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// mounts MFE in the shell application
export const mount = (container: HTMLElement) => {
  ReactDOM.createRoot(container).render(<App />);
};
