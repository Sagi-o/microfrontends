import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { APP_NAME } from './consts';

if (import.meta.env.DEV) {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// export mount function to the shell application
(window as any)[APP_NAME] = {
  mount: (container: HTMLElement) => {
    ReactDOM.createRoot(container).render(<App />);
  },
};
