import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { App } from './App';

export const mount = (el, { onNavigate, defaultHistory, defaultPath }) => {
  const history = defaultHistory || createMemoryHistory();
  if (defaultPath) {
    history.replace(defaultPath);
  }
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }, type) {
      const { pathname } = history.location;
      if (pathname === nextPathname) {
        return;
      }
      switch (type) {
        case "POP":
          history.go(-1);
          break;
        case "PUSH":
          history.push(nextPathname);
          break;
        case "REPLACE":
          history.replace(nextPathname);
          break;
      }
    }
  }
};

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#marketing-dev-root');
  if (element) {
    mount(element, { defaultHistory: createBrowserHistory() });
  }
}
