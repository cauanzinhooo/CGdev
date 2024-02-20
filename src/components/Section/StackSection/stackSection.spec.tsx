import { render } from '@testing-library/react';

import StackSection from '.';

describe('render the section ', () => {
  it('shoould render the section component', () => {
    const { container } = render(<StackSection />);
    expect(container).toBeInTheDocument();
  });
});
