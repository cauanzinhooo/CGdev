import { render } from '@testing-library/react';

import Social from '.';

describe('render LineMenu component', () => {
  it('should render the component', () => {
    const { container } = render(<Social />);
    expect(container).toBeInTheDocument();
  });
});
