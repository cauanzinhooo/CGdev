import { render } from '@testing-library/react';
import { Fa500Px } from 'react-icons/fa';

import { ViewCard } from '.';

describe('render the viewcard ', () => {
  it('shoould render the component', () => {
    const { getByText } = render(
      <ViewCard.Root icon={<Fa500Px />}>content</ViewCard.Root>,
    );
    expect(getByText('content')).toBeInTheDocument();
  });
});
