import { render } from '@testing-library/react';
import React from 'react';

import Title from './Title';

describe('Title', () => {
  test('renders the Title component', () => {
    render(<Title>test</Title>);
  });
});
