import React from 'react';
import { render } from '@testing-library/react';

import JwPlayerDemo from './JwPlayerDemo';

describe('<JwPlayerDemo>', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<JwPlayerDemo />);

    expect(container).toMatchSnapshot();
  });
});
