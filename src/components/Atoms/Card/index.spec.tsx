// Card.test.tsx
import { render } from '@testing-library/react';
import React from 'react';
import { Fa500Px } from 'react-icons/fa';

import Card from '.';

describe('Card component', () => {
  it('render card component', () => {
    const { getByText } = render(
      <Card
        title="title"
        iconTitle={<Fa500Px />}
        icon={[<Fa500Px key={0} />]}
        description="description"
      />,
    );

    expect(getByText('title')).toBeInTheDocument();
  });
});
