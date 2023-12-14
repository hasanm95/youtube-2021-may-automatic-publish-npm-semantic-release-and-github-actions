import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ActionSheet } from '../.';

const App = () => {
  return (
    <div>
      <ActionSheet.Header />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
