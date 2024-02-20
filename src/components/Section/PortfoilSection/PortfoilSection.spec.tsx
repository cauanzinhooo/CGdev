import { render } from '@testing-library/react';

import PortfoilSection from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<PortfoilSection />);
    expect(container).toBeInTheDocument();
  });
});
