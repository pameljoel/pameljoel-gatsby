import React from 'react';
import ReactDOM from 'react-dom';
import Daily from './Daily';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <Daily />, div);
});
