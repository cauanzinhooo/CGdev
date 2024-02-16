import { render } from '@testing-library/react';

import { Announcement } from '.';

describe('render the announcement component', () => {
  it('should render the component', () => {
    const { getByText } = render(
      <Announcement.Root>
        <div>content</div>
      </Announcement.Root>,
    );
    expect(getByText('content')).toBeInTheDocument();
  });
});
